const Item = (props) => {
    const { id, title, image, imageTitle, link, linkTitle } = props;
    return (
        <div className={`itemCategory itemCategory${id}`} key={id}>
            <div className={`item item${id}`}>
                <h3>{title} </h3>
                <img src={image} alt={imageTitle} className="itemImage" />
                {
                    (id !== 4) ?
                        <p><a href={link} >{linkTitle} </a> </p>

                        :
                        <button><a href={link} >{linkTitle} </a></button>

                }
            </div>
        </div>
    )
}
export default Item;