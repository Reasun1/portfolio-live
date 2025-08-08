@echo off
chcp 65001 >nul

echo 🚀 Portfolio Deployment Script
echo ================================

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Check if we're in a git repository
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
)

REM Get repository name from user
echo.
echo 📝 Please enter your GitHub username:
set /p username=

echo 📝 Please enter your repository name (e.g., portfolio):
set /p repo_name=

REM Add all files
echo 📦 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Initial portfolio commit"

REM Set the main branch (GitHub now uses 'main' by default)
echo 🌿 Setting main branch...
git branch -M main

REM Add remote origin
echo 🔗 Adding remote origin...
git remote add origin "https://github.com/%username%/%repo_name%.git"

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo.
echo ✅ Successfully pushed to GitHub!
echo.
echo 🌐 Next steps to enable GitHub Pages:
echo 1. Go to https://github.com/%username%/%repo_name%
echo 2. Click on 'Settings' tab
echo 3. Scroll down to 'Pages' section
echo 4. Under 'Source', select 'Deploy from a branch'
echo 5. Choose 'main' branch and '/(root)' folder
echo 6. Click 'Save'
echo.
echo 🎉 Your portfolio will be live at: https://%username%.github.io/%repo_name%
echo.
echo 💡 Don't forget to:
echo - Update your personal information in index.html
echo - Add your profile photo
echo - Update project links and descriptions
echo - Customize colors and styling
echo.
echo Happy coding! 🚀
pause 