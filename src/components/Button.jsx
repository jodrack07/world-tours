export const Button = ({ _class, children, onClick }) => {
  return <button className={`btn ${_class}`} onClick={onClick}>{children}</button>
}

export const PrimaryButton = ({ children, onClick }) => {
    return <Button  _class='btn-primary' children={children} onClick={onClick}/>
}

export const DangerButton = ({ children, onClick }) => {
    return <Button _class='btn-danger' children={children} onClick={onClick} />
}
