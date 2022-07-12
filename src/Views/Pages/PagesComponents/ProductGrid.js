import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useSelector } from 'react-redux';
import useProduct from '../../../Hooks/ProductHook';




const ProductGrid = () => {

    const productList = useSelector(state => state.productState.productList);
    const {deleteAgRow} = useProduct;

    const onGridReady = () => {

        if (document.getElementsByClassName("ag-paging-row-summary-panel").item(0)) {

            document.getElementsByClassName("ag-paging-row-summary-panel").item(0).childNodes.item(3).innerHTML = "از";
            document.getElementsByClassName("ag-paging-row-summary-panel").item(0).childNodes.item(7).innerHTML = "تا";
            document.getElementsByClassName("ag-paging-description").item(0).childNodes.item(1).innerHTML = "صفحه";
            document.getElementsByClassName("ag-paging-description").item(0).childNodes.item(5).innerHTML = "از";
        }

    }


    return <div className="ag-theme-alpine" style={{ height: 500, width: "60%", float: "right" }}>
        <AgGridReact enableRtl reactUi rowClass="agRow" rowData={productList}
            pagination={true} paginationPageSize={10} onGridReady={onGridReady}
            // frameworkComponents={{ renderEdit: renderEditLink }}
            rowSelection={'multiple'} rowMultiSelectWithClick={true}
        >
            <AgGridColumn field="productName" headerName="نام محصول" sortable ></AgGridColumn>
            <AgGridColumn field="price" headerName="قیمت" sortable></AgGridColumn>
            <AgGridColumn cellRenderer="renderEdit" ></AgGridColumn>
        </AgGridReact>
    </div>

}

export default ProductGrid;