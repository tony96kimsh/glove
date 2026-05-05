# 🎙️ MinutesAI - AI 기반 음성-텍스트 변환 서비스

![MinutesAI](./markdown/web/minutesAI/img/md/1.jpg)

- [🌐 GitHub Repository](https://github.com/tony96kimsh/minutesAI)
- [🚀 Hugging Face Spaces](https://huggingface.co/spaces/tony96kimsh/minutesAI) (배포 링크가 있는 경우)

---

## 🟩 프로젝트 소개

MinutesAI는 OpenAI Whisper 모델을 활용한 **AI 기반 음성-텍스트 자동 변환 서비스**입니다.
KOSA 멘토링 프로그램을 통해 개발되었으며, 오디오 및 비디오 파일을 텍스트로 변환하여 회의록 작성, 자막 생성 등 다양한 용도로 활용할 수 있습니다.

### 주요 특징

- **고정밀 음성 인식**: OpenAI Whisper AI 엔진을 통한 정확한 STT(Speech-to-Text) 변환
- **직관적인 웹 인터페이스**: Gradio 기반의 사용자 친화적인 UI
- **실시간 편집 기능**: 변환된 텍스트를 바로 수정 가능
- **다양한 포맷 지원**: 오디오(WAV, MP3, M4A, FLAC, OGG, OPUS) 및 비디오(MP4, MKV, MOV, AVI, WEBM)
- **모델 선택 옵션**: tiny, base, small, medium, large 모델 중 선택 가능
- **진행률 추적**: 변환 과정을 시각적으로 확인 가능

---

## 🟨 기술 스택

### AI & Machine Learning
- **OpenAI Whisper**: 최신 음성 인식 모델
- **PyTorch**: 딥러닝 프레임워크

### Backend & Framework
- **Python 3.11+**: 메인 개발 언어
- **Gradio**: 웹 인터페이스 구축

### Deployment
- **Hugging Face Spaces**: AI 모델 호스팅 플랫폼
- **Docker**: 컨테이너화된 배포 환경

---

## 📋 주요 기능

### 1. 파일 업로드 및 변환
- 오디오 및 비디오 파일을 드래그 앤 드롭 또는 선택하여 업로드
- 자동으로 음성 부분을 텍스트로 변환

### 2. Whisper 모델 선택
- **Tiny**: 빠른 변환 속도 (낮은 정확도)
- **Base**: 균형잡힌 성능
- **Small**: 일반적인 용도에 적합
- **Medium**: 높은 정확도
- **Large**: 최고 정확도 (느린 속도)

### 3. 텍스트 편집 및 내보내기
- 변환된 텍스트를 실시간으로 편집
- 텍스트 파일로 내보내기 가능

### 4. 진행 상태 표시
- 변환 과정의 진행률을 시각적 인디케이터로 표시

---

## 🎯 활용 사례

- **회의록 자동 생성**: 회의 녹음 파일을 텍스트로 변환
- **자막 제작**: 비디오 콘텐츠의 자막 생성
- **인터뷰 전사**: 인터뷰 내용을 문서화
- **강의 노트**: 강의 영상을 텍스트로 변환하여 학습 자료 제작
- **접근성 향상**: 청각 장애인을 위한 음성 콘텐츠 텍스트화

---

## 🛠️ 프로젝트 구조

```
minutesAI/
├── app.py                  # Gradio 웹 애플리케이션
├── requirements.txt        # Python 패키지 의존성
├── Dockerfile             # Docker 컨테이너 설정
└── README.md              # 프로젝트 문서
```

---

## 📚 학습 내용

이 프로젝트를 통해 다음과 같은 기술을 학습하고 적용했습니다:

1. **AI 모델 활용**: OpenAI Whisper 모델의 이해 및 활용
2. **웹 애플리케이션 개발**: Gradio를 이용한 빠른 프로토타이핑
3. **딥러닝 프레임워크**: PyTorch를 활용한 모델 추론
4. **클라우드 배포**: Hugging Face Spaces를 통한 AI 앱 배포
5. **컨테이너화**: Docker를 활용한 환경 관리

---

## 🔗 관련 링크

- [OpenAI Whisper 공식 문서](https://github.com/openai/whisper)
- [Gradio 공식 문서](https://www.gradio.app/)
- [Hugging Face Spaces](https://huggingface.co/spaces)
- [KOSA 멘토링 프로그램](https://miraeplus.sw.or.kr/ko/mentoring)

---

## 📝 라이선스

이 프로젝트는 KOSA 멘토링 프로그램의 일환으로 제작되었습니다.
