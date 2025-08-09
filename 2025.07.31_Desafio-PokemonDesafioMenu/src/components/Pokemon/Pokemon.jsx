function Pokemon() {

  const item1 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    numero: 'nº1',
    nome: 'Bulbasaur',
    tipo: 'Planta/Veneno'
  }

  const item2 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    numero: 'nº2',
    nome: 'Ivyssauro',
    tipo: 'Planta/Veneno'
  }

  const item3 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    numero: 'nº3',
    nome: 'Venusaur',
    tipo: 'Planta/Veneno'
  }

  const item4 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    numero: 'nº4',
    nome: 'Charmander',
    tipo: 'Fogo'
  }

  const item5 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    numero: 'nº5',
    nome: 'Charmeleon',
    tipo: 'Fogo'
  }

  const item6 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    numero: 'nº6',
    nome: 'Chalizard',
    tipo: 'Fogo'
  }

  const item7 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    numero: 'nº7',
    nome: 'Squirtle',
    tipo: 'Água'
  }

  const item8 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
    numero: 'nº8',
    nome: 'Wortortle',
    tipo: 'Água'
  }

  const item9 = {
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    numero: 'nº9',
    nome: 'Blastoise',
    tipo: 'Água'
  }

  const pokemons = [item1, item2, item3, item4, item5, item6, item7, item8, item9]

  return (
    <>
      <div>
        <Logo />
      </div>

      <Musica/>

      <div className='lista'>
        {
          pokemons.map(function (umPokemon) {
            return <Card info={umPokemon} />
          })
        }
      </div>

      <div>
        <Video />
      </div>
    </>
  )
}

export default Pokemon
