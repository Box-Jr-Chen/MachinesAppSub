import React from 'react';
import './subsystem.scss';
function subsystem() {
    return (
        <div class="subsystem">
                <div class="navbar"></div>
                <div class="main">
                    <div class="leftbar">
                        <div>系統訂閱服務</div>
                        <div>關於我們</div>
                    </div>
                    <div class="right">
                        <table  class="table">
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        </table>
                    </div>
                 </div>

        </div>
      );
}

export default subsystem;