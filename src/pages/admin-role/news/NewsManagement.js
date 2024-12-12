import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, MoreVert, Notifications } from '@mui/icons-material';
import NewsService from '../../../services/news.service';
import { toast } from 'react-toastify';
import { gray, black, red, white } from '../../../config/theme/themePrintives';
import NewsModal from '../../../components/news/NewsModal';

const NewsManagement = () => {
  const [news, setNews] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await NewsService.getAllNews();
      setNews(response);
    };

    fetchNews();
  }, []);

  const handleMenuClick = (event, newsItem) => {
    console.log('Menu Clicked, News Item:', newsItem);
    setAnchorEl(event.currentTarget);
    setSelectedNews(newsItem);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleViewDetails = () => {
    setOpenModal(true);
    handleCloseMenu();
  };

  const handleDelete = async () => {
    try {
      await NewsService.deleteNews(selectedNews._id);
      setNews(news.filter((item) => item.id !== selectedNews._id));
      toast.success('Xóa tin tức thành công');
    } catch (error) {
      toast.error('Xóa tin tức thất bại');
    }
    handleCloseMenu();
  };

  const handleCloseNewsModal = () => {
    setOpenModal(false);
    setSelectedNews(null);
  }

  const columns = [
    { field: 'id', headerName: '#', flex: 0.5, headerAlign: 'center', align: 'center' },
    { field: 'name', headerName: 'Tiêu đề', flex: 4 },
    { field: 'date', headerName: 'Ngày đăng', flex: 1 },
    {
      field: 'action',
      headerName: '',
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <IconButton onClick={(event) => handleMenuClick(event, params.row)}>
          <MoreVert />
        </IconButton>
      ),
    },
  ];

  const rows = news.map((item, index) => ({
    id: index + 1,
    name: item.name,
    date: new Date(item.createdAt).toLocaleDateString('vi-VN'),
    _id: item.id,
    imageUrl: item.imageUrl,
  }));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
      {/* Title and Notification Icon Button */}
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
        <IconButton size='small' sx={{ color: black[900], ":hover": { color: white[50], bgcolor: red[500] } }}>
          <Notifications />
        </IconButton>
      </Box>
      <Typography variant="h4">Quản lý tin tức</Typography>
      <Button
        sx={{
          width: 200,
          color: white[50],
          bgcolor: black[900],
          ":hover": { bgcolor: gray[400] },
          fontWeight: 600,
          fontSize: 14,
          textTransform: 'none',
          paddingX: 4,
          '&:disabled': {
            bgcolor: gray[200],
            color: black[100],
          },
          marginTop: 4,
          alignSelf: 'flex-end',
        }}
        startIcon={<Add />}
        onClick={() => setOpenModal(true)}
      >
        Thêm tin tức
      </Button>
      <Box sx={{ marginTop: 2, display: 'flex', flex: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
          }}
          disableColumnMenu
          localeText={{
            MuiTablePagination: {
              labelRowsPerPage: 'Số hàng mỗi bảng',
              labelDisplayedRows: ({ from, to, count }) => `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
            },
          }}
          sx={{
            flex: 1,
            display: 'flex',
            width: '100%',
            border: `1px solid ${gray[200]}`,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: gray[200],
              color: black[900],
              fontWeight: 600,
              fontSize: 16,
              outline: 'none',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 600,
            },
            '& .MuiDataGrid-cell': {
              outline: 'none',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: gray[200],
            },
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-selectedRowCount': {
              visibility: 'hidden',
            },
            '& .MuiDataGrid-checkboxInput.Mui-checked': {
              color: 'inherit',
            },
            '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
              outline: 'none',
            },
            '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
              outline: 'none',
            },
            '& .MuiDataGrid-row.Mui-selected': {
              backgroundColor: `${gray[200]} !important`,
            },
            '& .MuiDataGrid-columnSeparator--resizable': {
              display: 'block',
            },
          }}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={handleViewDetails}>
          <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xem chi tiết</Typography>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xóa</Typography>
        </MenuItem>
      </Menu>

      {openModal && <NewsModal open={openModal} onClose={handleCloseNewsModal} news={selectedNews} setNews={setNews} />}
    </Box>
  );
};

export default NewsManagement;
