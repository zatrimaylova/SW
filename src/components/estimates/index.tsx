import React, { FC, useState } from 'react';

import Icon from '../../ui-kit/icon';
import Input from '../../ui-kit/input';
import './estimates.styles.scss';

const SUBTITLES_MENU = [
  'Уровень',
  'Наименование работ',
  'Основная з/п',
  'Оборудование',
  'Накладные расходы',
  'Сметная прибыль',
] as const;

interface Row {
  id: number;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
  child: (null | any)[];
}

interface RowCreate {
  equipmentCosts: string;
  estimatedProfit: string;
  machineOperatorSalary: string;
  mainCosts: string;
  materials: string;
  mimExploitation: string;
  overheads: string;
  rowName: string;
  salary: string;
  supportCosts: string;
  total: string;
}

type RowsList = Row[] | [];

interface EstimatesProps {
  rowsList: RowsList[];
  //isEditing?: boolean;
}

const Estimates: FC<EstimatesProps> = ({ rowsList }) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [creatingRow, setCreatingRow] = useState<RowCreate>({
    equipmentCosts: '0',
    estimatedProfit: '0',
    machineOperatorSalary: '0',
    mainCosts: '0',
    materials: '0',
    mimExploitation: '0',
    overheads: '0',
    rowName: '',
    salary: '0',
    supportCosts: '0',
    total: '0',
  });

  const createRow = () => {};

  return (
    <div id="--estimates-view">
      <div className="estimates-head">
        <div>
          <span>Строительно-монтажные работы</span>
        </div>
      </div>
      <div className="estimates-table">
        <div className="row-boxes">
          {SUBTITLES_MENU.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="rows">
          {rowsList.length ? (
            <></>
          ) : (
            <div className="empty-row">
              <div className="row-boxes">
                <div>
                  <div
                    onClick={() => {
                      console.log('allo');
                      setIsCreating(!isCreating);
                    }}
                  >
                    <Icon name="paper" color="#7890B2" size={24} />
                  </div>
                  {isCreating && (
                    <div onClick={createRow}>
                      <Icon name="checkmark" color="#7890B2" size={24} />
                    </div>
                  )}
                </div>
                {isCreating && (
                  <>
                    <div>
                      <Input
                        value={creatingRow.rowName}
                        onChange={(value) =>
                          setCreatingRow({ ...creatingRow, rowName: value })
                        }
                      />
                    </div>
                    <div>
                      <Input
                        value={String(creatingRow.mainCosts)}
                        onChange={(value) =>
                          setCreatingRow({ ...creatingRow, mainCosts: value })
                        }
                        type="number"
                      />
                    </div>
                    <div>
                      <Input
                        value={String(creatingRow.equipmentCosts)}
                        onChange={(value) =>
                          setCreatingRow({
                            ...creatingRow,
                            equipmentCosts: value,
                          })
                        }
                        type="number"
                      />
                    </div>
                    <div>
                      <Input
                        value={String(creatingRow.overheads)}
                        onChange={(value) =>
                          setCreatingRow({
                            ...creatingRow,
                            overheads: value,
                          })
                        }
                        type="number"
                      />
                    </div>
                    <div>
                      <Input
                        value={String(creatingRow.estimatedProfit)}
                        onChange={(value) =>
                          setCreatingRow({
                            ...creatingRow,
                            estimatedProfit: value,
                          })
                        }
                        type="number"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Estimates;
