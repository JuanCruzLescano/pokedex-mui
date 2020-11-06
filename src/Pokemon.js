const Pokemon = (props) => {
  const {match} = props
  const { pokemonId } = match.params
  return (
    <div>
      {`this is a Pokemon Page for pokemon #${pokemonId}`}
    </div>
  )
}

export default Pokemon;
