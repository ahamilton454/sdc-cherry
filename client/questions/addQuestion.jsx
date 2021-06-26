import axios from 'axios';
import React from 'react'

class AddQuestion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      qUser:"",
      qEmail:"",
      questionInput:""
    }
  }

  handleSubmit(){
    const {qUser, qEmail, questionInput} = this.state;
    let warning = "You are missing the following:\n"

    if (qUser === "") {
      warning += "- Username \n"
    }
    if (qEmail === "") {
      warning += "- Email \n"
    }
    if (questionInput === "") {
      warning += "- Question"
    }
    if (warning !== "You are missing the following:\n") {
      alert(warning)
    }else {
        axios({
          method: 'post',
          url: "/qa/questions",
          data: {
            name: qUser,
            email: qEmail,
            body: questionInput,
            product_id: this.props.productId
          }
        })
        .catch((err) => console.log("Error: ", err))
      }
  }

  inputChange(stateKey){
    let input = document.getElementById(stateKey).value;
    this.setState({[stateKey]: input})
  }

  closeModal() {
    this.setState({
      answer:"",
      user:"",
      email:"",
      photos: []
    })
    this.props.handleClose()
  }

  render(){
    if (!this.props.show){
      return null;
    }

    return (
      <div className="question-modal">
        <div className="question-content">
          <div className="modal-header">
            <h2 className="question-title">Ask Your Question</h2>
            <div onClick={() => this.closeModal()}>X</div>
          </div>
          <p className="subtitle">About the {this.props.productName}</p>
          <label>What is your nickname* </label>
          <input id="qUser" type="text" onChange={() => this.inputChange("qUser")} maxLength="60" placeholder="Example: jackson11!"></input>
          <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
          <label>Your email*</label>
          <input id="qEmail" type="text" onChange={() => this.inputChange("qEmail")} maxLength="60" placeholder="“Why did you like the product or not?”"></input>
          <p className="disclaimer">For authentication reasons, you will not be emailed</p>
          <label>Your Question*</label>
          <textarea id="questionInput" type="text" onChange={() => this.inputChange("questionInput")} maxLength="1000"></textarea>
          <div className="question-footer">
          <button onClick={() =>this.handleSubmit()}>Submit question</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddQuestion;