const AceTestInfoTable: React.FC = () => {
  return (
    <div id="test-info" className="w-full p-8 md:p-16 ">
      <div className="max-w-4xl mx-auto md:px-6">
        {/* Test Info Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <colgroup>
              <col className="w-[20%]" />
              <col className="w-[70%]" />
            </colgroup>
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="py-5 px-6 bg-red-500 border-b border-gray-300 text-center text-xl md:text-3xl font-bold text-white"
                >
                  ACE CPT 시험 응시 안내
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  응시요건
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  - 만 18세 이상
                  <br />- 고졸 이상 학력 소유
                  <br />- CPR 수료증
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  시험 관련
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  - TOEFL 시험처럼 정해진 장소에서 응시
                  <br />- 총 150문항, 약3시간 소요
                  <br />- 본사 사이트 및 메일로 합격 결과 확인
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  시험 방식
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  지정된 시험 장소에서 컴퓨터로 보는 온라인 평가
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  시험 시간
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  180분, 쉬는 시간 없음
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  준비물
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  신분증 필수
                  <br />
                  신분증을 지참하지 않을 경우 응시가 어려울 수 있으며, 별도의
                  환불은 없습니다.
                  <p className="mt-2">
                    (이어폰, 애플 워치 등 모든 전자기기 소지 불가)
                  </p>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  합격 기준
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  70%, 800점 만점에 500점 이상이면 통과
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-gray-300 text-center text-sm md:text-base text-gray-800">
                  자격증 기간
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-left text-sm md:text-base text-gray-800">
                  합격일로부터 2년
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="py-4 px-6 border-b border-r border-gray-300 text-left text-sm md:text-base text-gray-800"
                >
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      ACE CPT 자격증은 합격일로부터 2년간 유효합니다. 자격증
                      유지를 위해서는 CEU 점수의 갱신이 필요합니다. 2년안에 갱신
                      신청을 하지 않을 시 소멸됩니다.
                    </li>
                    <li>
                      시험 일정 및 장소는 본사 사정에 따라 변경될 수 있습니다.
                    </li>
                    <li>
                      CEU란?
                      <div className="mt-2">
                        <p>
                          - ACE에서 인정하는 교육과 세미나에 참석하여 지속해서
                          교육을 이수했다는 것을 증명하는 점수입니다.
                          <br />- ACE 인정 CEU에는 FMS L1, FMS L2, FCS,
                          Breathing, DVRT L1 등이 있습니다.
                        </p>
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AceTestInfoTable
