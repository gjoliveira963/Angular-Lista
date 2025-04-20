import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	template: `
		<div class="home-container">
			<h1>Bem-vindo ao Portfólio Angular</h1>
			<p>
				Este projeto demonstra conhecimentos em Angular com duas funcionalidades
				principais:
			</p>
			<ul>
				<li><strong>Calculadora:</strong> Operações matemáticas básicas.</li>
				<li
					><strong>Lista de Compras:</strong> Gerenciamento de itens para
					compras.</li
				>
			</ul>
			<p>Utilize o menu acima para navegar entre as páginas.</p>
		</div>
	`,
	styles: [
		`
			.home-container {
				max-width: 600px;
				margin: 40px auto;
				padding: 32px;
				background: var(--nord6);
				border-radius: 12px;
				box-shadow: 0 8px 16px var(--nord3);
				text-align: center;
			}
			h1 {
				color: var(--nord10);
				margin-bottom: 16px;
			}
			ul {
				text-align: left;
				margin: 16px auto;
				max-width: 400px;
				color: var(--nord2);
			}
			p {
				color: var(--nord3);
			}
		`,
	],
})
export class HomeComponent {}
