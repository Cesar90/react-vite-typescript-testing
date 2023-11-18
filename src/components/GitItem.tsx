import { FC } from 'react'

// interface IProps{
//     image: RequireOnly<Datum, 'id'|'url'|'title'>
// }

// type AnyCompProps = React.ComponentProps<typeof GitItem>


export const GitItem:FC<TImage> = ({ url, title}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        {title}
    </div>
  )
}
