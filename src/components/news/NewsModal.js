import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import NewsService from '../../services/news.service';
import { toast } from 'react-toastify';
import CloudinaryService from '../../services/cloudinary.service';

const NewsModal = ({ open, onClose, news, setNews }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (news) {
      setName(news.name || '');
      setImageUrl(news.imageUrl || '');
      setSelectedImage(news.imageUrl || '');
    }
  }, [news]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const uploadedImageUrl = await CloudinaryService.uploadImage(file);
      setImageUrl(uploadedImageUrl);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    try {
      if (news) {
        await NewsService.updateNews(news.id, { name, imageUrl });
        setNews((prev) => prev.map((item) => (item.id === news.id ? { ...item, name, imageUrl } : item)));
        toast.success('Cập nhật tin tức thành công');
      } else {
        const newNews = await NewsService.createNews({ name, imageUrl });
        setNews((prev) => [...prev, newNews]);
        toast.success('Thêm tin tức thành công');
      }
      onClose();
    } catch (error) {
      toast.error('Lưu tin tức thất bại');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 1,
          boxShadow: 24,
          width: '40vw',
          maxHeight: '80vh',
          overflowY: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h6">{news ? 'Chỉnh sửa tin tức' : 'Thêm tin tức'}</Typography>
        <TextField label="Tiêu đề" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {selectedImage ? (
            <Box
              sx={{
                width: '100%',
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid gray',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              <img src={selectedImage} alt="uploaded" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
            </Box>
          ) : (
            <>
              <Typography sx={{ color: 'gray', marginBottom: 2 }}>Chọn hình ảnh từ máy của bạn</Typography>
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: 8 }} />
            </>
          )}
        </Box>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Lưu
        </Button>
      </Box>
    </Modal>
  );
};

export default NewsModal;
