import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@mui/material'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src="https://i.ibb.co/7yjxWSv/share.png"
          className="h-[15px] w-[15px]"
          alt=""
        />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Table
              id="transition-modal-title"
              className=" gap-4 border-b-2 border-gray-500 cursor-pointer "
            >
              <TableHead className="">
                <tr className=" ">
                  <TableCell className="bg-gray-200 h-[10px] w-[100px] ">
                    ID
                  </TableCell>
                  <TableCell className="bg-gray-200 h-[10px] w-[100px]">
                    URL
                  </TableCell>
                </tr>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400"> 11:22:20</h3>
                  </TableCell>

                  <TableCell>
                    <div className=" gap-3 items- cursor-pointer ">
                      <Link
                        target={'_blank'}
                        to="https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      >
                        https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400"> 11:22:21</h3>
                  </TableCell>

                  <TableCell>
                    <div className=" gap-3 items- cursor-pointer ">
                      <Link
                        target={'_blank'}
                        to="https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      >
                        https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400"> 11:22:22</h3>
                  </TableCell>

                  <TableCell>
                    <div className=" gap-3 items- cursor-pointer ">
                      <Link
                        target={'_blank'}
                        to="https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      >
                        https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400"> 11:22:23</h3>
                  </TableCell>

                  <TableCell>
                    <div className=" gap-3 items- cursor-pointer ">
                      <Link
                        target={'_blank'}
                        to="https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      >
                        https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3 className="text-sm hover:bg-gray-400"> 11:22:24</h3>
                  </TableCell>

                  <TableCell>
                    <div className=" gap-3 items- cursor-pointer ">
                      <Link
                        target={'_blank'}
                        to="https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      >
                        https://images.unsplash.com/photo-1676868720246-d608555dd3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
