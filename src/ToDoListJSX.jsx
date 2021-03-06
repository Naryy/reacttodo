import React,{Component} from 'react';
import styled from 'styled-components';
class ToDoListItem extends Component{
    render(){
        const{
            title,
            description,
            ...props
        } = this.props;
        return(
            <ToDoListItemDiv {...props}>
                <ToDoListItemtitle>{title}</ToDoListItemtitle>
                <ToDoListItemdescription>{description}</ToDoListItemdescription>
            </ToDoListItemDiv>
        )
    }
}
const ToDoListItemDiv = styled.div`
    border : 1px solid aquamarine;
    border-radius:4px;
    width:300px;
    background-color:#fafbfd;
    box-shadow : 1px 2px 5px 3px rgba(0,0,0,.1);
    padding:4px 2px;
    margin:0 auto;
`
const ToDoListItemtitle = styled.div`
    font-size:18px;
    margin:0 8px 4px;
    border-bottom:1px solid #333;
    text-align:left;
    padding:4px 8px;
`
const ToDoListItemdescription = styled.div`
    word-wrap:dreak-word;
    padding:8px;
`

export default ToDoListItem;