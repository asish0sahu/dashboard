
import { Table, TableBody, TableHead, TableCell, TableRow } from "@mui/material";

function AssetOverview() {
  return (
    <div className="bg-red-100 p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6">Asset Overview</h2>
      <Table className="mb-8">
        <TableHead>
          <TableRow className="bg-slate-300">
            <TableCell className="text-white">Configuration</TableCell>
            <TableCell className="text-white">Usable Carpet Area (In Sq feet)</TableCell>
            <TableCell className="text-white">No. of Units</TableCell>
            <TableCell className="text-white">Total Usable Carpet (In Sq feet)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Studio</TableCell>
            <TableCell>345</TableCell>
            <TableCell>17</TableCell>
            <TableCell>5,865</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1 BHK</TableCell>
            <TableCell>475</TableCell>
            <TableCell>18</TableCell>
            <TableCell>8,550</TableCell>
          </TableRow>
          <TableRow >
            <TableCell>1 BHK Garden Flat</TableCell>
            <TableCell>718</TableCell>
            <TableCell>4</TableCell>
            <TableCell>2,872</TableCell>
          </TableRow>
          <TableRow className="font-semibold text-white bg-slate-300">
            <TableCell className="text-white">Total</TableCell>
            <TableCell className="text-white"></TableCell>
            <TableCell className="text-white">39</TableCell>
            <TableCell className="text-white">17,287</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default AssetOverview;
