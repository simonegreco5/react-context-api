// sezione import
import { NavLink } from "react-router-dom";
import menu from "../assets/arrayMenu.js";
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext.jsx";

export default function AppHeader() {

    // const { budgetMode, setBudgetMode, toggleBudgetMode } = useContext(BudgetContext)
    const {maxPrice, setMaxPrice} = useContext(BudgetContext)

    return (

        <header className="">

            <nav className="d-flex justify-content-between">

                <div className="d-flex">
                    <i className="bi bi-tux"></i>
                    <h3>BOOLEAN SHOPPING</h3>
                    {/* <i className="bi bi-box-seam-fill"></i> */}
                </div>

                <ul className="d-flex">
                    {/* <li><button onClick={toggleBudgetMode} className={budgetMode ? 'active-budget' : ''}>
                        {`${budgetMode === true ? 'DISATTIVA' : 'ATTIVA'} MODALITÁ BUDGET`}
                    </button></li> */}
                    <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="filter product by price..." />
                    {
                        menu.map((item) => (
                            <li key={item.id}>
                                <NavLink to={item.url}>{item.nome}</NavLink>
                            </li>
                        ))
                    }
                </ul>

            </nav>


        </header>
    )

}