import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import NewsService from '../../services/news.service';
import { toast } from 'react-toastify';
import CloudinaryService from '../../services/cloudinary.service';
import { gray, black, white } from '../../config/theme/themePrintives';

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
        <TextField
          type="text"
          variant="outlined"
          placeholder={'Nhập tiêu đề'}
          fullWidth
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& input[type=number]': {
                MozAppearance: 'textfield',
              },
              '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '& fieldset': {
                borderColor: gray[200],
              },
              '&:hover fieldset': {
                borderColor: black[900],
              },
              '&.Mui-focused fieldset': {
                borderColor: black[900],
                borderWidth: 1,
              },
            },
          }}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {selectedImage ? (
            <>
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: `1px solid ${gray[200]}`,
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <img src={selectedImage} alt="uploaded" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
              </Box>
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: 8 }} />
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: `1px solid ${gray[200]}`,
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              />
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: 8 }} />
            </>
          )}
        </Box>
        <Button
          sx={{
            color: white[50],
            bgcolor: black[900],
            ":hover": { bgcolor: gray[400] },
            fontWeight: 600,
            fontSize: 14,
            textTransform: 'none',
            '&:disabled': {
              bgcolor: gray[200],
              color: black[100],
            },
            marginTop: 2,
          }}
          onClick={handleSave}
        >
          Lưu tin tức
        </Button>
      </Box>
    </Modal>
  );
};

export default NewsModal;
