import axios from 'axios';

export 
function change_collapse() {
    return function (dispatch) {
        dispatch({
            type: 'change_collapse'
        })
        // axios.get('http://127.0.0.1:4523/m1/1032873-0-default/getPeopleTotal').then(res => {
        //     dispatch({
        //         type: 'change_collapse',
        //         data: res.data
        //     })
        // })
    }
  }