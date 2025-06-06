# 에너지 소비와 출산율

> 파이썬을 통한 에너지 소비와 출산율 반비례 관계 조사

## 📘 프로젝트 개요

### 🎯 제작 배경
방송통신대학교 생명과환경 수업에서 에너지 사용이 높을수록 출산율이 낮아지는 반비례 관계가 있다는 연구 결과를 접했습니다. 이에 따라 출산율이 급격히 낮아지는 한국 사회라는 한정적인 범위에서도 이 현상이 두드러지는지를 데이터로 확인하고자 분석을 시작하게 되었습니다.

### 🛠 기술 스택
Python
- matplotlib
- numpy

### ✨ 주요 기능
1. 연도별 전국 출산율 및 에너지 소비 추이 그래프 제공
2. 지역별 연도별 출산율과 전기 소비량 추이 시각화
3. 지역별 출산율과 전기 소비량 간의 상관계수 계산 및 시각화 (막대그래프)

## 분석 결과

### 지역별, 전국 출산율의 추이
- 전국 평균 출산율은 점차 하락세를 보임
- 특히 일부 지역은 1.0 이하로 진입하며 급감 추세가 뚜렷함

![출산율 추이](./markdown/desktop/analysis-fertility/img/local_fertility.png) | ![한국 출산율과 에너지 소비](./markdown/desktop/analysis-fertility/img/kor-ftt-energy.png)
--|--|

### 지역별 에너지 소비의 추이
- 대부분의 지역에서 전력 소비는 지속적으로 증가하는 경향
- 도시화가 높은 지역일수록 소비량 증가가 뚜렷함


![전기 소비 추이](./markdown/desktop/analysis-fertility/img/local_elec.png) 

### 출산율과 에너지 소비는 유의미한 상관관계가 있을까?

> 상관계수(correlation coefficient)는 두 변수 사이의 통계적 관계를 표현하기 위해 특정한 상관 관계의 정도를 수치적으로 나타낸 계수이다.
>

- 전국 및 지역별 출산율과 전력 소비량의 연도별 데이터를 기반으로 피어슨 상관계수를 계산했습니다.
- 전국 데이터의 상관계수는 -0.87 수치가 나왔으며 이는 높은 반비례 관계성을 나타냅니다.
- 대부분 지역에서 약한 음의 상관관계 또는 유의미하지 않은 상관관계를 보였습니다.
- 일부 지역(예: 경기, 대구)에서는 비교적 뚜렷한 음의 상관계수 확인되었습니다.
- 이는 에너지 소비 증가와 출산율 감소 간의 구조적 관련 가능성을 시사하는 것으로 보입니다.

![relative graph](./markdown/desktop/analysis-fertility/img/local_rel.png)

```py
'''지역별 출산율과 전기 소비 상관계수 (2011~2020) 코드 일부'''

# 1. 출산율 리스트에서 연도 2011~2020 구간만 잘라내기
ftt_local_list_cut = []
for row in ftt_local_list:
    cut_row = []
    for i in range(11, 21):  # 2011~2020에 해당하는 인덱스
        cut_row.append(row[i])
    ftt_local_list_cut.append(cut_row)

# 2. None 값을 NaN으로 바꾸기
for i in range(len(ftt_local_list_cut)):
    for j in range(len(ftt_local_list_cut[i])):
        if ftt_local_list_cut[i][j] is None:
            ftt_local_list_cut[i][j] = np.nan

# 3. 각 지역별 출산율과 전기소비 간의 상관계수 계산
correlations = []

for fert, elec in zip(ftt_local_list_cut, elc_local_list):
    fert_arr = np.array(fert)
    elec_arr = np.array(elec)

    # NaN이 아닌 값들만 골라내는 마스크
    mask = ~np.isnan(fert_arr)

    if np.any(mask):  # 유효한 값이 하나라도 있으면
        corr = np.corrcoef(fert_arr[mask], elec_arr[mask])[0, 1]
        correlations.append(corr)
    else:
        correlations.append(np.nan)
```

1981년부터 2020년까지 40년간의 전국 데이터를 분석한 결과,
**출산율과 1인당 에너지 소비량 사이에는 강한 반비례 관계(-0.87)** 수치를 확인했습니다.
이는 두 변수 간의 연관성이 통계적으로 매우 강하며, 출산율이 낮을수록 에너지 소비가 증가하는 경향이 뚜렷하다는 것을 의미함을 확인 할 수 있었습니다.

```py
''' 전국 출산율과 에너지 소비 상관계수 출력 '''
fertility_arr = np.array(fertility)
energy_arr = np.array(energy)

if len(fertility_arr) >= 2 and len(energy_arr) >= 2:
    corr = np.corrcoef(fertility_arr, energy_arr)[0, 1]
else:
    corr = 0

print(f"상관계수: {corr:.2f}")
```




## 📁 폴더 구조
```
├── compare_local.py
├── compare_whole.py
├── csv
│   ├── electricity_local.csv
│   ├── energy_total.csv
│   ├── fertility_local.csv
│   └── fertility_whole.csv
├── excel
│   ├── 에너지 주요 지표 (연간) .xlsx
│   ├── 시군구_출생아수__합계출산율_20250429013727.xlsx
│   └── 1인당 전력 소비 (지역) .xlsx
├── img (for README.md)
└── README.md
```

### 📜 코드 구조
- `compare_local.py`: 지역별 출산율과 전력 소비 데이터를 불러와 시각화 및 상관계수 분석 수행
- `compare_whole.py`: 전국 단위 출산율과 에너지 주요 지표 분석용 스크립트

## 🛠 추후 작업 및 이슈

### ✅ TODO
- 에너지 소비 지표를 전력 외 다른 에너지원(가스, 석유 등)으로 확장
- 출산율 요인으로 소득, 교육 수준 등 다변량 분석 연계
- 대시보드 형태로 시각화 리포트 자동화

### 🐞 Issues
- 출산율 데이터와 에너지 데이터의 연도 불일치로 인한 전처리 이슈
- 일부 지역은 데이터 누락 혹은 통계 수치의 부정확성 존재

## 🔗 참고자료

- [[과학이야기] 인간 에너지소비와 출산율 (매일경제)](https://www.mk.co.kr/news/all/3053434)

### csv 출처
- 지역별 출산율: [KOSIS (국가통계포털)](https://kosis.kr/statisticsList/statisticsListIndex.do?menuId=M_01_01&vwcd=MT_ZTITLE&parmTabId=M_01_01&parentId=U.1;U_7.2;&outLink=Y#U_7.2)
    - [ 인구 ] > [ 인구동향조사 ] > [ 출생 ]
- 연간 총 출산율: [KOSIS (국가통계포털)](https://kosis.kr/statisticsList/statisticsListIndex.do?menuId=M_01_01&vwcd=MT_ZTITLE&parmTabId=M_01_01&parentId=U.1;U_7.2;&outLink=Y#U_7.2)
- 1인당 전력 소비 (지역): [KESIS 국가 에너지 통계 종합 정보 시스템](https://www.kesis.net/sub/subChart.jsp?report_id=910206&reportType=1)
- 에너지 주요 지표(연간): [KESIS 국가 에너지 통계 종합 정보 시스템](https://www.kesis.net/sub/subChart.jsp?report_id=910203&reportType=0)