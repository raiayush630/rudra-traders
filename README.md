# 🏪 Rudra Traders — Full-Stack Business Website

**Rudra Traders** is a full-stack business website for a hardware and interior materials shop in Buxar, Bihar. It features a premium React frontend with Tailwind CSS and a Django REST Framework backend.

---

## 📁 Project Structure

```
rudra-traders/
├── frontend/                  # React.js application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── WhatsAppButton.js
│   │   │   ├── ProductCard.js
│   │   │   └── SectionHeader.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Contact.js
│   │   │   └── Gallery.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── vercel.json
│   └── .env.example
│
└── backend/                   # Django REST Framework
    ├── rudra_backend/
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── products/
    │   ├── models.py
    │   ├── serializers.py
    │   ├── views.py
    │   ├── urls.py
    │   ├── admin.py
    │   └── fixtures/
    │       └── initial_data.json
    ├── manage.py
    ├── requirements.txt
    ├── render.yaml
    └── .env.example
```

---

## ⚡ Quick Start (Local Development)

### 1. Backend Setup (Django)

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate       # Linux/Mac
# venv\Scripts\activate        # Windows

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env
# Edit .env with your values (SECRET_KEY, etc.)

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Load sample data
python manage.py loaddata products/fixtures/initial_data.json

# Create admin superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

Backend runs at: **http://localhost:8000**  
Admin panel: **http://localhost:8000/admin**

---

### 2. Frontend Setup (React)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Set REACT_APP_API_URL=http://localhost:8000/api

# Start development server
npm start
```

Frontend runs at: **http://localhost:3000**

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories/` | List all product categories |
| GET | `/api/products/` | List all products |
| GET | `/api/products/?category=plywood` | Filter by category slug |
| GET | `/api/products/?featured=true` | Get featured products |
| GET | `/api/products/?search=bwr` | Search products |
| GET | `/api/products/featured/` | Get featured products (dedicated) |
| GET | `/api/products/{id}/` | Get single product details |
| POST | `/api/contact/` | Submit contact message |

### POST `/api/contact/` Payload

```json
{
  "name": "Rahul Kumar",
  "phone": "9876543210",
  "email": "rahul@example.com",
  "message": "I need 50 sheets of 19mm BWR plywood."
}
```

### Sample Response

```json
{
  "success": true,
  "message": "Thank you! We will contact you soon."
}
```

---

## 🌐 Deployment

### Backend → Render

1. Push your `backend/` folder to a GitHub repository.
2. Go to [render.com](https://render.com) → **New** → **Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Build Command:** `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
   - **Start Command:** `gunicorn rudra_backend.wsgi:application`
5. Set environment variables in Render dashboard:
   ```
   SECRET_KEY=your-secret-key-here
   DEBUG=False
   ALLOWED_HOSTS=your-render-url.onrender.com
   CORS_ALLOWED_ORIGINS=https://your-vercel-url.vercel.app
   DATABASE_URL=postgresql://...  (from Render PostgreSQL add-on)
   ```
6. Add a **PostgreSQL** database from Render and copy the `DATABASE_URL`
7. After deploy, load fixtures:
   ```bash
   # Via Render shell or one-off task
   python manage.py loaddata products/fixtures/initial_data.json
   python manage.py createsuperuser
   ```

---

### Frontend → Vercel

1. Push your `frontend/` folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Set environment variables in Vercel:
   ```
   REACT_APP_API_URL=https://your-render-url.onrender.com/api
   REACT_APP_WHATSAPP_NUMBER=6203860376
   ```
4. **Framework:** Create React App  
   **Build Command:** `npm run build`  
   **Output Directory:** `build`
5. Click **Deploy** ✅

---

## 🎨 Design Highlights

| Feature | Implementation |
|---------|---------------|
| Color Theme | Wood brown (#c4711e), dark bark (#2e1f14), white |
| Typography | Playfair Display (headings) + Source Sans 3 (body) |
| Animations | CSS keyframes (fade-up, float, pulse) |
| Responsive | Mobile-first Tailwind CSS |
| WhatsApp | Floating button with pulse animation |
| SEO | react-helmet-async for meta tags |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6, Tailwind CSS |
| Backend | Django 4.2, Django REST Framework |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Deployment | Vercel (frontend) + Render (backend) |
| Media | Pillow, WhiteNoise |
| CORS | django-cors-headers |

---

## 📱 Key Features

- ✅ Floating WhatsApp button with pre-filled message
- ✅ Contact form → stored in Django DB (visible in admin)
- ✅ Product filtering by category + search
- ✅ Product detail pages with inquiry buttons
- ✅ Google Maps embed for store location
- ✅ Gallery with lightbox and category filter
- ✅ Django Admin for product/category/contact management
- ✅ Fully responsive mobile design
- ✅ SEO-optimized meta tags
- ✅ Fallback static data (works even without backend)

---

## 👤 Business Information

| Detail | Value |
|--------|-------|
| Business Name | Rudra Traders |
| Address | Rambagh, Buxar, Bihar 802101 |
| Mobile | 6203860376 |
| WhatsApp | 6203860376 |
| Industry | Hardware & Interior Materials |
| Products | Plywood, Sunmica, Adhesives, Hardware |

---

## 📋 Django Admin Access

After running `python manage.py createsuperuser`:

- URL: `http://localhost:8000/admin`
- Manage: **Categories**, **Products**, **Contact Messages**
- Upload product images, toggle featured/in-stock status
- View and mark contact inquiries as read

---

## 🔒 Environment Variables Reference

### Backend `.env`

```env
SECRET_KEY=django-insecure-change-this-in-production
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
DATABASE_URL=postgresql://user:pass@host:5432/dbname
```

### Frontend `.env`

```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_WHATSAPP_NUMBER=6203860376
```

---

## 🚀 Production Checklist

- [ ] Change `SECRET_KEY` to a strong random value
- [ ] Set `DEBUG=False`
- [ ] Set correct `ALLOWED_HOSTS`
- [ ] Set correct `CORS_ALLOWED_ORIGINS` (Vercel URL)
- [ ] Use PostgreSQL `DATABASE_URL`
- [ ] Set `REACT_APP_API_URL` to Render backend URL
- [ ] Load initial fixture data on Render
- [ ] Create superuser on Render
- [ ] Test all API endpoints
- [ ] Test WhatsApp button
- [ ] Test contact form submission
- [ ] Check mobile responsiveness

---

Built with ❤️ for Rudra Traders, Buxar, Bihar
