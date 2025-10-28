<div align="center">
  <img src="https://tone-monte-portfolio-v3.s3.us-east-1.amazonaws.com/projects/banner-foodiary.png" alt="Foodiary Mobile App Banner" width="800"/>
  
  # 📱 Foodiary Mobile App
  
  <p>
    <a href="#english">🇺🇸 English</a> •
    <a href="#portuguese">🇧🇷 Português</a>
  </p>
  
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
</div>

---

## 📱 Related Projects

- **🔗 API Backend**: [Foodiary API](https://github.com/tonelopes-dev/foodiary-api) - Serverless AWS API with AI-powered meal analysis

---

<div id="english"></div>

# 🇺🇸 English

## 📋 About the Project

**Foodiary Mobile App** is a cutting-edge React Native application that revolutionizes meal tracking through intelligent AI-powered analysis. Built with modern mobile development practices, the app seamlessly integrates with a robust serverless backend to provide users with automatic nutritional insights from photos and voice recordings.

### 🎯 Key Features

- **📸 Smart Photo Analysis** - AI-powered meal recognition and nutritional breakdown
- **🎤 Voice Recording** - Audio-to-text meal descriptions with intelligent processing
- **📊 Real-time Tracking** - Live nutritional monitoring with personalized goals
- **🔐 Secure Authentication** - JWT-based authentication with persistent sessions
- **📱 Cross-platform** - Native iOS and Android support via Expo
- **🎨 Modern UI/UX** - Beautiful, intuitive interface with Tailwind CSS styling
- **⚡ Offline-first** - Optimistic updates with intelligent caching strategies

## 🏗️ Architecture

### Technology Stack

- **Framework**: React Native with Expo (~53.0.20)
- **Navigation**: Expo Router with protected route groups
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Storage**: AsyncStorage for local persistence
- **HTTP Client**: Axios with automatic token management
- **Media**: Expo Camera & Audio for meal capture
- **TypeScript**: Full type safety across the application

### App Architecture

```text
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Mobile App    │    │   Expo Router   │    │   React Query   │
│   (React Native)│◄──►│   Navigation    │◄──►│   State Mgmt    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Media Capture │    │   Auth Context  │    │   HTTP Client   │
│   (Camera/Audio)│    │   (JWT Tokens)  │    │   (Axios)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────┐
                    │   Foodiary API  │
                    │   (AWS Lambda)  │
                    └─────────────────┘
```

## 🚀 Core Features

### Authentication Flow

- **Multi-step Registration** - Comprehensive user onboarding with goal calculation
- **Secure Login** - JWT token-based authentication with automatic refresh
- **Protected Routes** - Route groups for public/private navigation
- **Persistent Sessions** - AsyncStorage for seamless user experience

### Meal Management

- **Photo Capture** - High-quality camera integration with preview
- **Voice Recording** - Audio meal descriptions with playback
- **Real-time Processing** - Live status updates during AI analysis
- **Nutritional Insights** - Detailed breakdown of calories and macronutrients
- **Historical Tracking** - Date-based meal history with statistics

### User Experience

- **Intuitive Navigation** - Clean, modern interface design
- **Responsive Design** - Optimized for all screen sizes
- **Offline Support** - Cached data with background synchronization
- **Performance Optimized** - Efficient rendering and memory management

## 🔧 Setup and Development

### Prerequisites

- Node.js 18.x or higher
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) or Android Studio
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/tonelopes-dev/foodiary-mobile.git
cd foodiary-mobile

# Install dependencies
npm install

# Start the development server
npm start
```

### Development Commands

```bash
# Start Expo development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web browser
npm run web
```

### Environment Configuration

Create a `.env` file in the root directory:

```bash
EXPO_PUBLIC_API_URL=https://your-api-url.com
EXPO_PUBLIC_APP_NAME=Foodiary
```

## 📱 App Structure

### Route Organization

```
src/app/
├── (public)/          # Public routes (no authentication required)
│   ├── index.tsx      # Landing page
│   ├── signin.tsx     # Login screen
│   └── signup.tsx     # Registration flow
├── (private)/         # Protected routes (authentication required)
│   ├── index.tsx      # Dashboard/Home
│   └── meals/
│       └── [mealId].tsx # Meal details
└── _layout.tsx        # Root layout with providers
```

### Component Architecture

```
src/components/
├── AuthLayout.tsx           # Authentication wrapper
├── SignUpSteps/            # Multi-step registration
├── Modal components/       # Camera & Audio modals
├── Meal components/        # Meal display & management
└── UI components/          # Reusable interface elements
```

## 🎨 Design System

- **Typography**: Host Grotesk font family with multiple weights
- **Colors**: Custom color palette optimized for accessibility
- **Icons**: Lucide React Native icon library
- **Layout**: Responsive design with safe area handling
- **Animations**: Smooth transitions and micro-interactions

## 🔒 Security & Performance

- **JWT Authentication** - Secure token-based authentication
- **Data Validation** - Zod schemas for type-safe form handling
- **Optimistic Updates** - Immediate UI feedback with background sync
- **Memory Management** - Efficient component lifecycle management
- **Error Boundaries** - Graceful error handling and recovery

## 📊 State Management

- **Server State**: TanStack React Query for API data
- **Client State**: React Context for authentication
- **Form State**: React Hook Form for complex form handling
- **Local Storage**: AsyncStorage for persistent data
- **Cache Strategy**: Intelligent caching with automatic invalidation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Write clean, readable code
- Test on both iOS and Android
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License. See the `LICENSE` file for more details.

## 👨‍💻 Developer

Developed with ❤️ to make nutritional tracking intelligent and accessible.

---

<div align="center">
  <p>Made with React Native, Expo, and lots of ☕</p>
</div>

---

<div id="portuguese"></div>

# 🇧🇷 Português

## 📋 Sobre o Projeto

O **Foodiary Mobile App** é um aplicativo React Native de última geração que revoluciona o rastreamento de refeições através de análise inteligente baseada em IA. Desenvolvido com práticas modernas de desenvolvimento mobile, o app se integra perfeitamente com um backend serverless robusto para fornecer aos usuários insights nutricionais automáticos a partir de fotos e gravações de voz.

### 🎯 Principais Funcionalidades

- **📸 Análise Inteligente de Fotos** - Reconhecimento de refeições e análise nutricional baseada em IA
- **🎤 Gravação de Voz** - Descrições de refeições em áudio com processamento inteligente
- **📊 Rastreamento em Tempo Real** - Monitoramento nutricional ao vivo com metas personalizadas
- **🔐 Autenticação Segura** - Autenticação baseada em JWT com sessões persistentes
- **📱 Multiplataforma** - Suporte nativo para iOS e Android via Expo
- **🎨 UI/UX Moderna** - Interface bonita e intuitiva com estilização Tailwind CSS
- **⚡ Offline-first** - Atualizações otimistas com estratégias de cache inteligentes

## 🏗️ Arquitetura

### Stack Tecnológica

- **Framework**: React Native com Expo (~53.0.20)
- **Navegação**: Expo Router com grupos de rotas protegidas
- **Estilização**: NativeWind (Tailwind CSS para React Native)
- **Gerenciamento de Estado**: TanStack React Query para estado do servidor
- **Formulários**: React Hook Form com validação Zod
- **Armazenamento**: AsyncStorage para persistência local
- **Cliente HTTP**: Axios com gerenciamento automático de tokens
- **Mídia**: Expo Camera & Audio para captura de refeições
- **TypeScript**: Segurança de tipos completa na aplicação

### Arquitetura do App

```text
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Mobile App    │    │   Expo Router   │    │   React Query   │
│   (React Native)│◄──►│   Navigation    │◄──►│   State Mgmt    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Media Capture │    │   Auth Context  │    │   HTTP Client   │
│   (Camera/Audio)│    │   (JWT Tokens)  │    │   (Axios)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────┐
                    │   Foodiary API  │
                    │   (AWS Lambda)  │
                    └─────────────────┘
```

## 🚀 Funcionalidades Principais

### Fluxo de Autenticação

- **Registro Multi-etapas** - Onboarding completo do usuário com cálculo de metas
- **Login Seguro** - Autenticação baseada em tokens JWT com refresh automático
- **Rotas Protegidas** - Grupos de rotas para navegação pública/privada
- **Sessões Persistentes** - AsyncStorage para experiência de usuário perfeita

### Gerenciamento de Refeições

- **Captura de Fotos** - Integração de câmera de alta qualidade com preview
- **Gravação de Voz** - Descrições de refeições em áudio com reprodução
- **Processamento em Tempo Real** - Atualizações de status ao vivo durante análise de IA
- **Insights Nutricionais** - Análise detalhada de calorias e macronutrientes
- **Rastreamento Histórico** - Histórico de refeições baseado em data com estatísticas

### Experiência do Usuário

- **Navegação Intuitiva** - Design de interface limpo e moderno
- **Design Responsivo** - Otimizado para todos os tamanhos de tela
- **Suporte Offline** - Dados em cache com sincronização em background
- **Performance Otimizada** - Renderização eficiente e gerenciamento de memória

## 🔧 Configuração e Desenvolvimento

### Pré-requisitos

- Node.js 18.x ou superior
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) ou Android Studio
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/tonelopes-dev/foodiary-mobile.git
cd foodiary-mobile

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### Comandos de Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento Expo
npm start

# Executar no simulador iOS
npm run ios

# Executar no emulador Android
npm run android

# Executar no navegador web
npm run web
```

### Configuração de Ambiente

Crie um arquivo `.env` na raiz do diretório:

```bash
EXPO_PUBLIC_API_URL=https://your-api-url.com
EXPO_PUBLIC_APP_NAME=Foodiary
```

## 📱 Estrutura do App

### Organização de Rotas

```
src/app/
├── (public)/          # Rotas públicas (sem autenticação)
│   ├── index.tsx      # Página inicial
│   ├── signin.tsx     # Tela de login
│   └── signup.tsx     # Fluxo de registro
├── (private)/         # Rotas protegidas (com autenticação)
│   ├── index.tsx      # Dashboard/Home
│   └── meals/
│       └── [mealId].tsx # Detalhes da refeição
└── _layout.tsx        # Layout raiz com providers
```

### Arquitetura de Componentes

```
src/components/
├── AuthLayout.tsx           # Wrapper de autenticação
├── SignUpSteps/            # Registro multi-etapas
├── Modal components/       # Modais de Câmera e Áudio
├── Meal components/        # Exibição e gerenciamento de refeições
└── UI components/          # Elementos de interface reutilizáveis
```

## 🎨 Sistema de Design

- **Tipografia**: Família de fontes Host Grotesk com múltiplos pesos
- **Cores**: Paleta de cores personalizada otimizada para acessibilidade
- **Ícones**: Biblioteca de ícones Lucide React Native
- **Layout**: Design responsivo com tratamento de área segura
- **Animações**: Transições suaves e micro-interações

## 🔒 Segurança e Performance

- **Autenticação JWT** - Autenticação segura baseada em tokens
- **Validação de Dados** - Schemas Zod para manipulação type-safe de formulários
- **Atualizações Otimistas** - Feedback imediato da UI com sincronização em background
- **Gerenciamento de Memória** - Gerenciamento eficiente do ciclo de vida dos componentes
- **Error Boundaries** - Tratamento gracioso de erros e recuperação

## 📊 Gerenciamento de Estado

- **Estado do Servidor**: TanStack React Query para dados da API
- **Estado do Cliente**: React Context para autenticação
- **Estado de Formulários**: React Hook Form para manipulação de formulários complexos
- **Armazenamento Local**: AsyncStorage para dados persistentes
- **Estratégia de Cache**: Cache inteligente com invalidação automática

## 🤝 Contribuição

Aceitamos contribuições! Siga estes passos:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

### Diretrizes de Desenvolvimento

- Siga as melhores práticas do TypeScript
- Use mensagens de commit significativas
- Escreva código limpo e legível
- Teste em iOS e Android
- Atualize a documentação conforme necessário

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para tornar o rastreamento nutricional inteligente e acessível.

---

<div align="center">
  <p>Feito com React Native, Expo e muito ☕</p>
</div>
