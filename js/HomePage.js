window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt=""
            src="../assets/female.png">
        </td>
        <td>chinki singh</td>
        <td>Female</td>
        <td><div class="dept-label">Sales</div></td>
        <td>350000</td>
        <td>18 April 2022</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/delete.jpeg">
            <img id="1" onclick="update(this)" alt="edit" src="../assets/edit.jpeg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}