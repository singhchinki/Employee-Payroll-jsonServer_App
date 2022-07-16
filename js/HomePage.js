let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    
    let innerHtml = `${headerHtml}`;
    //let empPayrollList = createEmployeePayrollJSON();-------------uc15-------
    for (const employeePayroll of employeePayrollList) {
        innerHtml = `${innerHtml}  
        <tr>
            <td><img class="profile" alt=""
                src="${employeePayroll._profilePic  }">
            </td>
            <td>${employeePayroll._name}</td>
            <td>${employeePayroll._gender}</td>
            <td>${getDeptHtml(employeePayroll._department)}</td>
            <td>${employeePayroll._salary}</td>
            <td>${stringifyDate(employeePayroll._startDate)}</td>
            <td>
                <img id="${employeePayroll._id}" onclick="remove(this)" alt="delete" 
                    src="../assets/delete.jpeg">
                <img id="${employeePayroll._id}" onclick="update(this)" alt="edit"
                    src="../assets/edit.jpeg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
/*-----------uc15----------------*/
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'chinki',
            _gender: 'Female',
            _department: [
                'Analyst',
                'Engineer'
            ],
            _salary: '650000',
            _startDate: '8 Nov 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/female.png'
        },
        {
            _name: 'Arjun',
            _gender: 'Male',
            _department: [
                'Army'
            ],
            _salary: '800000',
            _startDate: '15 Jan 2015',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/male.png'
        },
        {
            _name: 'Dimple',
            _gender: 'Female',
            _department: [
                'Teacher',
                'Engineer'
            ],
            _salary: '900000',
            _startDate: '25 Nov 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/femal2.jpeg'
        },
        {
            _name: 'Mallikharjun',
            _gender: 'Male',
            _department: [
                'Sales',
                'Engineer'
            ],
            _salary: '700000',
            _startDate: '5 Feb 2017',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/male2.jpeg'
        }
    ];
    return employeePayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
//Remove row
const remove = (node) => {
    let employeePayroll =  employeePayrollList.find(empData => empData._id == node.id);
    if(!employeePayroll) return;
    const index = employeePayrollList.map(empData => empData._id).indexOf(employeePayroll._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem('EmployeePayrollList', JSON.stringify(employeePayrollList));
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHtml();
}