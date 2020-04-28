import React, { Component } from "react";
import "./App.css";

// Import Component

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      txtName:'Hieu', 
      txtPassword:'',
      txtDsc:'Hôm nay trời nóng',
      sltGender:1,
      rdLang:'en',
      chkbStatus:true
    }
  }
  onHandleChange=(event)=>{
    let target = event.target;
    let name = target.name
    let value = target.type === 'checkbox'?target.checked:target.value
    this.setState({
      [name]:value
    })
  }
  onHandeSumit=(event)=>{
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandeSumit}>
                  <div className="form-group">
                      <label>Username:</label>
                      <input type="text" 
                      className="form-group" 
                      style={{width:'100%'}}
                      name="txtName"
                      onChange={this.onHandleChange}
                      value={this.state.txtName}
                      />
                    </div>
                    <div className="form-group">
                      <label>Passsword:</label>
                      <input type="password" 
                      className="form-group" 
                      style={{width:'100%'}}
                      name="txtPassword"
                      onChange={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mô tả:</label>
                      <textarea 
                      name="txtDsc"
                      className="form-group"
                      style={{width:'100%'}}
                      onChange={this.onHandleChange}
                      value={this.state.txtDsc}
                      ></textarea>
                    </div>
                    <label>Giới tính:</label>
                    <select className="form-control"
                      name="sltGender"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}
                    >
                      <option value={0}>Nữ</option>
                      <option value={1} >Nam</option>
                    </select>
                    <br/>
                    <label>Ngôn ngữ</label>
                    <div className="radio">
                        <label>
                            <input type="radio" 
                            name="rdLang"
                            value="en"
                            onChange={this.onHandleChange}
                            checked={this.state.rdLang === 'en'}
                            />
                            Tiếng Anh
                          </label>
                          <br/>
                          <label>
                            <input 
                            type="radio" 
                            name="rdLang"
                            value="vi"
                            onChange={this.onHandleChange}
                            checked={this.state.rdLang === 'vi'}
                            />
                           Tiếng Việt
                          </label>
                    </div>
                    
                    <div className="checkbox">
                      <label>
                        <input 
                        type="checkbox"
                        name="chkbStatus"
                        value={true}
                        onChange={this.onHandleChange}
                        checked={this.state.chkbStatus === true}
                        />
                        Trạng thái
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                    <button type="reset" className="btn btn-default">Xóa trắng</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
