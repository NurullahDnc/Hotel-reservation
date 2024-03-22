import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const Table = () => {
  // Örnek veri
  const sampleData = [
    {
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'Smith',
      email: 'john.doe@example.com',
      address: '123 Main St',
      zipCode: '12345',
      city: 'Anytown',
      state: 'ST',
      country: 'US',
    }
    // Daha fazla veri eklenebilir
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
        size: 150,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email Address',
        size: 300,
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'country',
        header: 'Country',
      },
    ],
    [],
  );

  const rowVirtualizerInstanceRef = useRef(null);

  const [data, setData] = useState(sampleData);
  const [isLoading, setIsLoading] = useState(false);
  const [sorting, setSorting] = useState([]);
  const [pageIndex, setPageIndex] = useState(0); // Sayfa indeksi
  const pageSize = 5; // Sayfa başına gösterilecek öğe sayısı

  const columnVirtualizerInstanceRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting, pageIndex]); // Sayfa indeksi veya sıralama değiştiğinde yeniden yükleyin

  // Sayfalama işlevi
  const paginatedData = useMemo(() => {
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, pageIndex]);

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
  };

  const table = useMaterialReactTable({
    columnVirtualizerInstanceRef,
    columns,
    data: paginatedData, // Sayfalı veri kullanın
    enableBottomToolbar: true, // Sayfalama için alt araç çubuğunu etkinleştirin
    enableGlobalFilterModes: true,
    enablePagination: true, // Sayfalama işlevselliğini etkinleştirin
    enableRowNumbers: true,
    enableRowVirtualization: true,
    muiTableContainerProps: { sx: { maxHeight: '600px' } },
    onSortingChange: setSorting,
    state: { isLoading, sorting },
    rowVirtualizerInstanceRef,
    rowVirtualizerOptions: { overscan: 5 },
    onPageChange: handlePageChange, // Sayfa değişikliği işlevini tanımlayın
    totalPages: totalPages, // Toplam sayfa sayısını sağlayın
    currentPage: pageIndex, // Geçerli sayfa indeksini sağlayın
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
