const List = ({nameList}) => {

  const style = "hover:underline hover:decoration-4 hover:underline-offset-8 transition-all duration-200 hover:opacity";
  return(
      <li className={style}>{nameList}</li>
  )
}

export default List