import React, {useState} from "react";
import * as S from "./style";
import useGithub from "../../hooks/github-hooks";
const Header = () => {
    const {getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return(
        <header>
            <S.Wrapper>
                <input type="text" placeholder ="Digite user name para pesquisa" 
                onChange={(event) => setUsernameForSearch(event.target.value) } />
                <botton type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </botton>
            </S.Wrapper>
        </header>
    );

};
export default Header;