import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { MoreVert } from '@mui/icons-material';
import NewsService from '../../../services/news.service';
import { toast } from 'react-toastify';
import { gray, black } from '../../../config/theme/themePrintives';
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
    setAnchorEl(event.currentTarget);
    setSelectedNews(newsItem);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedNews(null);
  };

  const handleViewDetails = () => {
    setOpenModal(true);
    handleCloseMenu();
  };

  const handleDelete = async () => {
    try {
      await NewsService.deleteNews(selectedNews.id);
      setNews(news.filter((item) => item.id !== selectedNews.id));
      toast.success('Xóa tin tức thành công');
    } catch (error) {
      toast.error('Xóa tin tức thất bại');
    }
    handleCloseMenu();
  };

  const columns = [
    { field: 'id', headerName: '#', flex: 0.5 },
    { field: 'name', headerName: 'Tiêu đề', flex: 1.5 },
    { field: 'date', headerName: 'Ngày đăng', flex: 1.2 },
    {
      field: 'action',
      headerName: '',
      flex: 0.5,
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
    id: item.id,
  }));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
      <Typography variant="h4">Quản lý tin tức</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Thêm tin tức
      </Button>
      <Box sx={{ height: 400, mt: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
          disableColumnMenu
          sx={{
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

      {openModal && <NewsModal open={openModal} onClose={() => setOpenModal(false)} news={selectedNews} setNews={setNews} />}
    </Box>
  );
};

export default NewsManagement;
