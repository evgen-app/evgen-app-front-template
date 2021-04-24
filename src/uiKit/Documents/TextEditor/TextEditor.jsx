import React, { Component } from 'react';
import { 
  AtomicBlockUtils,
  EditorState,
  convertToRaw,
RichUtils} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "./style.css"
import {DefaultButton} from "../../Button/Button"
import icon from "../../../svg/TaskIcon.svg"

import {Route, Switch, Redirect} from "react-router-dom";
 
export class MyUserComponentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(props.state),
    };
    
    
    this.Type_task = "audio";

    this.onChange = (editorState) => {
      try{
        props.onChange(editorState.getCurrentContent())
        this.setState({editorState})
      }
      catch(e){
      };
    }
    this.confirmMedia = this._confirmMedia.bind(this);
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    
  };
    
  stopPropagation = (event) => {
    event.stopPropagation();
  };


  test = (e) =>{
    this.Type_task = e.target.innerText
    this.confirmMedia()
  };


  renderModal = (props) => {
    const { color } = props.currentState;
    return (
      <div onClick={this.stopPropagation}>
        <div className="wrapper">
          <DefaultButton handleClick={(e)=>this.test(e)} id={1} class="taskButton">Прочитать текст</DefaultButton>
          <DefaultButton handleClick={(e)=>this.test(e)} id={2} class="taskButton">выбрать правильный вариант ответа</DefaultButton>
          <DefaultButton handleClick={(e)=>this.test(e)} id={3} class="taskButton">правда/ложь</DefaultButton>
          <DefaultButton handleClick={(e)=>this.test(e)} id={4} class="taskButton">расставить заголвки</DefaultButton>
        </div>
       </div>
    );
  };



  taskPic = (props) =>{
    const { expanded, onExpandEvent } = props;
    return (
      <div aria-haspopup="true" aria-expanded={expanded} aria-label="rdw-color-picker">
        <div onClick={onExpandEvent}>
          <div className="rdw-option-wrapper">
          <img src={icon} alt=""/>
          </div>
        </div>
        {expanded ? this.renderModal(props) : undefined}
      </div>
    );
  }



  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _confirmMedia() {
    let  {editorState, Type} = this.state;
    Type = this.Type_task
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      Type,
      'IMMUTABLE',
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      {currentContent: contentStateWithEntity}
    );

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      ),
    }, () => {
      setTimeout(() => null, 0);
    });
  }

  

  render() {
    let toolbar = {};
    if (this.props.addComponents == true){
      toolbar = {colorPicker: { component: this.taskPic }}
    }

    return (
      <div style={styles.root}>
          <Editor
            blockRendererFn={mediaBlockRenderer}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onEditorStateChange={this.onChange.bind(this)}
            placeholder="Введи текст"
            ref="editor"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={toolbar}
          />
      </div>
    );
  }
}

function mediaBlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
}

const Media = (props) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const type = entity.getType();

  let media;
  if (type === 'audio') {
    media = <div>audio</div>;
  } else if (type === "Прочитать текст") {
    media = <div>Прочитать текст</div>;
  } else if (type === 'выбрать правильный вариант ответа') {
    media = <div>выбрать правильный вариант ответа</div>;
  } else if (type === "правда/ложь"){
    media = <div>правда/ложь</div>
  } else if (type === "расставить заголвки"){
  media = <div>расставить заголвки</div>
}

  return media;
};

const styles = {
  root: {
    fontFamily: '\'Georgia\', serif',
    padding: 20,
    width: 600,
  },
  buttons: {
    marginBottom: 10,
  },
  urlInputContainer: {
    marginBottom: 10,
  },
  urlInput: {
    fontFamily: '\'Georgia\', serif',
    marginRight: 10,
    padding: 3,
  },

  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  media: {
    width: '100%',
    whiteSpace: 'initial'
  },
};
