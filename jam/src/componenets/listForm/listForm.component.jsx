import axios from "axios";
import React from "react";
import "./listform.scss"
const API = process.env.REACT_APP_BACKEND_API

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formList: []
        }
        
    }
    async componentDidMount(){
        try {
            console.log(API);
            const result = await axios.get(`${API}/showForms`)
            console.log(result);
            console.log(API);
            this.setState({formList:result.data.form}) 
        } catch (error) {
            alert(error.message)            
        }
    }
    
    render() {
        console.log(API);
        const { formList } = this.state;
        return <div className="list-container">
            {
                formList.map(list => <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-xs-6">
                            <div class="list mb-2">
                                <div class="list-content">
                                    <h2><a href="#" class="text-black">{list.name}</a></h2>
                                    <span class="list-meta">
                                        <span class="list-meta-item"><i class="fa fa-clock-o"></i> {list.phNumber}</span>
                                        <a href="#" class="list-meta-item"><i class="fa fa-star"></i> {list.DOB}</a>
                                    </span>
                                    <p>
                                        {list.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

            }
        </div>
    }
}
export default ListForm
