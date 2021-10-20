import React from "react";
import { useSelector } from "react-redux";
import { SelectDirectorySections } from "../../redux/Directory-redux/DirectorySelector";
import MenuItems from "../menu-item/menu-item";
import { DirectoryContainer } from "./Directory.styles";


const Directory = () => {

    const sections = useSelector(SelectDirectorySections)


        return(

            <DirectoryContainer>
                   {
                sections.map(({id, ...sectionsParam}) => (
                    <MenuItems key={id} {...sectionsParam}/>
                ))
            }

            </DirectoryContainer>
         
            
        )

    }

// const mapStateToProps=createStructuredSelector({
//   sections: SelectDirectorySections
// })


export default Directory;