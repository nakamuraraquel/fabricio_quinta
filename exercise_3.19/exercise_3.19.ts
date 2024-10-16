/* 
P.3.17. Construa um sistema que ordene valores em uma lista de objetos contendo os atributos
nome:string e idade:número. Seu sistema deve ordenar os valores primeiramente pelo nome e,
posteriormente, pela idade. Note que seu algoritmo de ordenação deverá operar em 2 camadas.
A primeira ordena pelo nome e a segunda ordena os objetos de mesmo nome mas uglizando o
telefone. Faça a devida adaptação no algoritmo de ordenação da bolha fornecido pelo professor.

P.3.18. Repita o problema 3.17 mas uglizando o algoritmo da inserção.

P.3.19. Repita o problema 3.18 mas uglizando o algoritmo da mescla.
*/
  
interface Pessoa {
    nome: string;
    idade: number;
  }
  
  function merge(esquerda: Pessoa[], direita: Pessoa[]): Pessoa[] {
    let resultado: Pessoa[] = [];
    let i = 0, j = 0;
  
    while (i < esquerda.length && j < direita.length) {
      if (esquerda[i].nome < direita[j].nome) {   // se o nome da esquerda for menor (A < B), adicione A
        resultado.push(esquerda[i]);
        i++;   // proxima pessoa do array da esquerda
      } else if (esquerda[i].nome > direita[j].nome) {  // se o nome da esquerda for maior (A > B), adicione B
        resultado.push(direita[j]);
        j++;  // proxima pessoa do array da direita
      }
      else {
        if (esquerda[i].idade <= direita[j].idade) {  // se idade da esquerda for menor ou igual, adicione-o
          resultado.push(esquerda[i]);
          i++;
        } else {
          resultado.push(direita[j]);  // caso o contrario, adicione a pessoa da direita
          j++;
        }
      }
    }

    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));  // adiciona os elementos restantes dos arrays esquerda e direira ao resultado e retorna o array ordenado 
  }
  

  function mergeSort(pessoas: Pessoa[]): Pessoa[] {
    if (pessoas.length <= 1) {   // se o array tem 1 ou 0 elementos, ja esta ordenado, entao retorna
      return pessoas;
    }
  
    const meio = Math.floor(pessoas.length / 2);  // calcula o indice do meio do array
    const esquerda = mergeSort(pessoas.slice(0, meio)); // chamada recursiva para a primeira metade do array
    const direita = mergeSort(pessoas.slice(meio));  // chamada recursiva para a segunda metade do array
  
    return merge(esquerda, direita);  // mescla as duas metades ordenadas chamando a funcao merge e retorna o resultado
  }
  
  const listaDePessoas: Pessoa[] = [
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 25 },
    { nome: 'Ana', idade: 22 },
    { nome: 'Bruno', idade: 28 },
    { nome: 'Carlos', idade: 22 }
  ];

  console.log("Iniciando a ordenação...");
  
  const listaOrdenada = mergeSort(listaDePessoas); // chama a funcao merge passando a lista de pessoas e armazena o resultado em listaOrdenada
  
  console.log("Lista ordenada:");
  console.log(listaOrdenada);
  

/* 
- Sistema de ordenação de valores em um objeto.
- Ordenação por nome e idade.
- Ordena primeiramente pelo nome, no caso de dois nomes iguais, ordena pela idade.
- Duas camadas de ordenação simultâneas.
- MergeSort, divide o array de pessoas ao meio até separa-lo em casos bases, assimilando os casos posteriormente.
- Após a separação, chama-se a função merge, onde aplica a estrutura de decisão para comparar qual nome vem primeiro e se um nome é igual a outro, comparar pelas idades.
- Retorna a lista ordenada através de merge. 
- Push adiciona um ou mais elementos ao final de um array.
*/