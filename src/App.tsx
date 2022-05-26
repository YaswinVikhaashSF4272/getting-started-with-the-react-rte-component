import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Link, Table, QuickToolbar,
  Image, HtmlEditor, Inject } from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class App extends React.Component {

  public customToolbarSettings : object = {
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'CreateTable', 'Image', 'CreateLink']
  }; 
  rteObject ! : RichTextEditorComponent;
  public rteValue ! : string;
  getFormattedContent() {
    this.rteValue = this.rteObject.getHtml();
  }
  render() {
    return (
      <div>  
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <ButtonComponent onClick={this.getFormattedContent.bind(this)}>Get HTML</ButtonComponent>
        </div> 
        <RichTextEditorComponent ref={(richtexteditor : RichTextEditorComponent)=> {this.rteObject=richtexteditor}}
        toolbarSettings={this.customToolbarSettings}>
          <p><a href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started/">Rich Text Editor</a> allows to insert images from online as well as local computer where you want to insert the image in the your content.</p>
          <p> <b> Get Started Quick Toolbar to click on the image </b> </p>
          <p> It is possible to add custom style on the selected image 
          inside the Rich Text Editor through quick toolbar.</p>
          <img src={process.env.PUBLIC_URL + '/Feather.png'} style={{width: '350px', height: '350px'}}></img>
          <Inject services = {[Toolbar, Link, Image, HtmlEditor, Table]}></Inject>
        </RichTextEditorComponent>
      </div>
    );
  }
}
   

export default App;



 
 
