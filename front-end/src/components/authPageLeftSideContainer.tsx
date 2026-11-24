import placeholder from "../assets/placeholderlogin.jpg";
import bookIcon from "../assets/book.png";
function AuthPagesLeftSideContainer(){
    return(
         <div className="authContainerLS">
          <div className="authContainerTitle">
            <div className="logo">
              <img src={bookIcon}></img>
            </div>
            <div className="content">
              <h1>AGX Library</h1>
              <p>Sistema de gerenciamento de biblioteca</p>
            </div>
          </div>
          <div className="authContainerImage">
            <img src={placeholder}></img>
          </div>
          <div className="authContainerFooter">
            <div className="content">
              <h2>Acervo acadêmico organizado em um só lugar.</h2>
              <p>
                Consulte exemplares disponíveis, acompanhe seus empréstimos e
                gerencie devoluções com simplicidade.
              </p>
            </div>
          </div>
        </div>
    );
}

export default AuthPagesLeftSideContainer;