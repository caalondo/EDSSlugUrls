# SlugUrls

Project for converting names of categories, topics and questions into friendly urls. This is developed for "Ecosistema de Servicio al cliente" project in Bancolombia S.A.

## Example

Use this kind of structure in the main input
```json
[
	{
		"categoria": "producto",
		"tema": "TARJETA DE CRÉDITO",
		"pregunta": "Si realizo un avance diferido a una cuota o lo pago dentro de la primera facturación, ¿por qué me genera intereses corrientes?"
	},	
  {
		"categoria": "producto",
		"tema": "TARJETA DE CRÉDITO",
		"pregunta": "¿A dónde me llega el saldo que me devuelven por compras reversadas?"
	}
]
```

You will see this response:
```json
[
  {
    "categoria": "producto",
    "slug-categoria": "producto",
    "tema": "TARJETA DE CRÉDITO",
    "slug-tema": "tarjeta-de-credito",
    "url-tema": "/producto/tarjeta-de-credito/",
    "pregunta": "Si realizo un avance diferido a una cuota o lo pago dentro de la primera facturación, ¿por qué me genera intereses corrientes?",
    "slug-pregunta": "si-realizo-un-avance-diferido-a-una-cuota-o-lo-pago-dentro-de-la-primera-facturacion-por-que-me-genera-intereses-corrientes"
  },
  {
    "categoria": "producto",
    "slug-categoria": "producto",
    "tema": "TARJETA DE CRÉDITO",
    "slug-tema": "tarjeta-de-credito",
    "url-tema": "/producto/tarjeta-de-credito/",
    "pregunta": "¿A dónde me llega el saldo que me devuelven por compras reversadas?",
    "slug-pregunta": "a-donde-me-llega-el-saldo-que-me-devuelven-por-compras-reversadas"
  }
]
```
