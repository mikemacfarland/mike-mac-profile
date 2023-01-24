
export const Bullet =({item})=> {
  return (
    <li className='bullet'>
        <div className='bullet_icon'></div>
        <p>{item.name}</p>
    </li>
  )
}

export default Bullet