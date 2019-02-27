import React, {Component} from 'react'

class Account extends Component{
    render(){
        return(
            <div className = "container account">
                <div className="container-fluid row OwnerInfo">
                    <span className="col-3">Thông tin chủ tài khoản</span>
                    <div className="col-9 row info">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input id="fullname" className="form-control" type="text" value="Nguyễn Đức Thiện" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ</label>
                                <input id="fullname" className="form-control" type="text" value="Mỹ Đình, Nam Từ Liêm,Hà Nội" readOnly/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Căn cước công dân</label>
                                <input id="fullname" className="form-control" type="text" value="033098001763" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>SĐT</label>
                                <input id="fullname" className="form-control" type="text" value="0978776056" readOnly/>
                            </div>
                        </div>
                        
                    </div>
                
                </div>

                <div className="container row VehicleInfo">
                <span className="col-3">Thông tin phương tiện</span>
                    <div className="col-9 row info">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            
                            <div className="form-group">
                                <label>Biển số xe </label>
                                <input id="fullname" className="form-control" type="text" value="89E1-42493" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Model</label>
                                <input id="fullname" className="form-control" type="text" value="Blade" readOnly/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="form-group">
                                <label>Ngày sản xuất</label>
                                <input id="fullname" className="form-control" type="text" value="02/06/2006" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Ngày đăng kí</label>
                                <input id="fullname" className="form-control" type="text" value="05/08/2006" readOnly/>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Account