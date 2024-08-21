import React, { useEffect, useState } from 'react';

import Header from './components/header';
import Aside from './components/aside';
import Estimates from './components/estimates';
import './styles.scss';
import getRows from './services/api';

interface Row {
  child: (null | any)[];
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

type RowsList = Row[] | [];

function App() {
  const [rowsList, setRowsList] = useState<RowsList[]>([]);

  const getRowsList = async (): Promise<void> => {
    try {
      const data = await getRows();
      if (Array.isArray(data) && data.every((item) => isValidRow(item))) {
        setRowsList(data);
      }
      //setRowsList(data);
    } catch (err) {
      //setError('Failed to fetch data');
    } finally {
      //setLoading(false);
    }
  };

  const isValidRow = (item: any): item is Row => {
    return (
      item && typeof item === 'object' && 'id' in item && 'rowName' in item
    );
  };

  useEffect(() => {
    getRowsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Aside />
        <Estimates rowsList={rowsList} />
      </main>
    </div>
  );
}

export default App;
