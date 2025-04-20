import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ItemLista } from "./itemlista";

/**
 * Componente ListaComprasComponent
 * Mini CRUD de lista de compras com persistência em localStorage.
 * Permite adicionar, editar, excluir, marcar como comprado e limpar a lista.
 * Demonstra manipulação de arrays, formulários, eventos e integração com o navegador.
 */
@Component({
	standalone: true,
	selector: "app-lista-compras",
	imports: [FormsModule, CommonModule],
	templateUrl: "./lista-compras.component.html",
	styleUrls: ["./lista-compras.component.css"],
})
export class ListaComprasComponent {
	/** Item digitado no input para adicionar */
	item: string = "";
	/** Lista de itens de compras */
	lista: ItemLista[] = [];
	/** ID do item em edição */
	editandoId: number | null = null;
	/** Nome temporário do item em edição */
	itemEditado: string = "";

	constructor() {
		this.carregarLista();
	}

	/**
	 * Adiciona um novo item à lista e salva no localStorage
	 */
	adicionarItem() {
		const nome = this.item.trim();
		if (!nome) return;
		const novoItem = new ItemLista();
		novoItem.nome = nome;
		// ID interno para persistência, mas não exibido
		novoItem.id = Date.now();
		this.lista.push(novoItem);
		this.item = "";
		this.salvarLista();
	}

	/**
	 * Inicia a edição de um item
	 */
	editarItem(item: ItemLista) {
		this.editandoId = item.id!;
		this.itemEditado = item.nome || "";
	}

	/**
	 * Salva a edição do item
	 */
	salvarEdicao(item: ItemLista) {
		const nome = this.itemEditado.trim();
		if (!nome) return;
		item.nome = nome;
		this.editandoId = null;
		this.itemEditado = "";
		this.salvarLista();
	}

	/**
	 * Cancela a edição do item
	 */
	cancelarEdicao() {
		this.editandoId = null;
		this.itemEditado = "";
	}

	/**
	 * Marca ou desmarca um item como comprado
	 */
	riscarItem(itemLista: ItemLista) {
		itemLista.comprado = !itemLista.comprado;
		this.salvarLista();
	}

	/**
	 * Exclui um item da lista
	 */
	excluirItem(id: number) {
		this.lista = this.lista.filter((item) => item.id !== id);
		this.salvarLista();
	}

	/**
	 * Limpa toda a lista
	 */
	limparLista() {
		this.lista = [];
		this.salvarLista();
	}

	/**
	 * Salva a lista no localStorage
	 */
	salvarLista() {
		localStorage.setItem("lista-compras", JSON.stringify(this.lista));
	}

	/**
	 * Carrega a lista do localStorage
	 */
	carregarLista() {
		const dados = localStorage.getItem("lista-compras");
		if (dados) {
			this.lista = JSON.parse(dados);
		}
	}

	/**
	 * Exibe índice amigável na tabela
	 */
	getIndice(item: ItemLista): number {
		return this.lista.indexOf(item) + 1;
	}
}
