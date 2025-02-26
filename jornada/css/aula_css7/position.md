# Guia sobre a propriedade position no CSS

A propriedade `position` no CSS define como um elemento é posicionado na página. Existem cinco valores principais:

## 1. static (Padrão)

- Os elementos seguem o fluxo normal do documento.
- Não são afetados por `top`, `right`, `bottom` ou `left`.

```css
.element {
    position: static; /* Padrão */
}
```

## 2. relative

- O elemento mantém seu espaço original, mas pode ser deslocado em relação a essa posição usando `top`, `right`, `bottom` e `left`.

```css
.element {
    position: relative;
    top: 20px; /* Move para baixo */
    left: 10px; /* Move para a direita */
}
```

## 3. absolute

- Remove o elemento do fluxo normal do documento.
- Posiciona-se em relação ao primeiro ancestral `positioned` (que não seja `static`). Caso contrário, será posicionado em relação ao `<html>`.

```css
.container {
    position: relative;
}

.element {
    position: absolute;
    top: 50px;
    right: 20px;
}
```

## 4. fixed

- Similar a `absolute`, mas o elemento fica fixo na tela, independente do scroll.

```css
.element {
    position: fixed;
    top: 0;
    right: 0;
    background: red;
}
```

## 5. sticky

- O elemento se comporta como `relative` até um certo ponto de rolagem, onde passa a se comportar como `fixed`.

```css
.element {
    position: sticky;
    top: 10px; /* Fixa o elemento quando atinge esse ponto */
    background: yellow;
}
```

## Comparação rápida

| Position  | Mantém espaço original? | Posição relativa a |
|-----------|------------------------|----------------------|
| static    | Sim                    | Fluxo normal        |
| relative  | Sim                    | Posição original    |
| absolute  | Não                    | Ancestral posicionado ou `<html>` |
| fixed     | Não                    | Janela de visualização (viewport) |
| sticky    | Sim (até certo ponto)   | Fluxo normal / Viewport |

Essas propriedades são fundamentais para o layout e organização dos elementos em um site!

