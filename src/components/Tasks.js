import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';

function Tasks() {
    return (
        <div className='control-pane'>
            <div className='control-section spreadsheet-control'>
                <SpreadsheetComponent
                    showRibbon={false}
                    showFormulaBar={false}
                    sheets={[
                        {
                            name: 'Sheet1',
                            rows: [
                                {
                                    cells: [{ index: 0, value: 'Task Name' }, { index: 1, value: 'Task Description' }],
                                    height: 40
                                },
                                {
                                    cells: [{ index: 0, value: 'Task 1' }, { index: 1, value: 'Description 1' }],
                                    height: 40
                                },
                                {
                                    cells: [{ index: 0, value: 'Task 2' }, { index: 1, value: 'Description 2' }],
                                    height: 40
                                }
                            ]
                        }
                    ]}
                    created={onCreate}
                >
                    <SheetsDirective>
                        <SheetDirective name='Sheet1'>
                            <ColumnsDirective>
                                <ColumnDirective width={150}></ColumnDirective>
                                <ColumnDirective width={400}></ColumnDirective>
                            </ColumnsDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
            </div>
        </div>
    );
}

function onCreate() {
    console.log('Spreadsheet created');
}

export default Tasks;