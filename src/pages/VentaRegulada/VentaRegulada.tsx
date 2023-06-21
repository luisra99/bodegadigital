import { useState, Fragment, useEffect } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { Column } from '@interfaces/common';

import { GetProducts } from '@/services/venta-regulada/products.services';
import GTabPanel from '@/shared/components/Generic/GTabPanel/GTabPanel';
import GTable from '@/shared/components/Generic/GTable/GTable';
import GTableContainer from '@/shared/components/Generic/GTableContainer/GTableContainer';
import Meta from '@/shared/components/Meta';

function VentaRegulada() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    GetProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const porComprarColumns: Column[] = [
    { header: 'Producto', name: 'denominacion', type: 'text' },
    { header: 'Cantidad', name: 'cantidad', type: 'number' },
  ];

  const compradosColumns: Column[] = [
    { header: 'Producto', name: 'denominacion', type: 'text' },
    { header: 'Cantidad', name: 'cantidad', type: 'number' },
    { header: 'Fecha', name: 'adquirido', type: 'date' },
  ];
  const productsForBuy = products.filter(({ confirmado }) => {
    return !confirmado;
  });
  const purchasedProducts = products.filter(({ confirmado }) => {
    return !!confirmado;
  });
  return (
    <>
      <Meta title="Venta regulada" />
      <GTabPanel
        tabs={[
          { name: 'Por comprar', badge: productsForBuy.length },
          { name: 'Comprados', badge: purchasedProducts.length },
        ]}
      >
        <GTableContainer>
          {productsForBuy.map(
            (
              {
                productos,
                corresponde,
                responsable,
                ticket,
              }: { productos: any[]; corresponde: string; responsable: string; ticket: string },
              index,
            ) => {
              return (
                <Fragment key={index}>
                  <Fragment key={index}>
                    <GTable
                      data={productos}
                      messageForEmpty="No hay productos comprados"
                      columns={porComprarColumns}
                      readOnly={true}
                      CustomHeader={
                        <Box sx={{ width: '100%', height: '100%' }} p={2}>
                          <Grid container>
                            <Grid item>
                              <Typography
                                pr={3}
                                variant="body1"
                              >{`Fecha: ${corresponde}`}</Typography>
                            </Grid>
                            <Grid item>
                              <Typography pr={3} variant="body1">{`Ticket: ${ticket}`}</Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                pr={3}
                                variant="body1"
                              >{`Responsable: ${responsable}`}</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      }
                    />
                  </Fragment>
                </Fragment>
              );
            },
          )}
        </GTableContainer>
        <GTableContainer>
          {purchasedProducts.map(
            (
              {
                productos,
                corresponde,
                responsable,
                ticket,
              }: { productos: any[]; corresponde: string; responsable: string; ticket: string },
              index,
            ) => {
              return (
                <Fragment key={index}>
                  <GTable
                    data={productos}
                    messageForEmpty="No hay productos comprados"
                    columns={compradosColumns}
                    readOnly={true}
                    CustomHeader={
                      <Box sx={{ width: '100%', height: '100%' }} p={2}>
                        <Grid container>
                          <Grid item>
                            <Typography
                              pr={3}
                              variant="body1"
                            >{`Fecha: ${corresponde}`}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography pr={3} variant="body1">{`Ticket: ${ticket}`}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              pr={3}
                              variant="body1"
                            >{`Responsable: ${responsable}`}</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    }
                  />
                </Fragment>
              );
            },
          )}
        </GTableContainer>
      </GTabPanel>
    </>
  );
}

export default VentaRegulada;
