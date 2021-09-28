import react, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectDirectorySections } from "../../redux/Directory-redux/DirectorySelector";
import MenuItems from "../menu-item/menu-item";
import "./Directory.styles.scss"

const Directory = ({sections}) => {


        return(

            <div className="directory-menu">
            {
                sections.map(({id, ...sectionsParam}) => (
                    <MenuItems key={id} {...sectionsParam}/>
                ))
            }

            </div>
        )

    }

const mapStateToProps=createStructuredSelector({
  sections: SelectDirectorySections
})


export default connect(mapStateToProps)(Directory);