const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  constructor() {
    this.size = 0;
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (length) => {
      this.size = length;
      this.checkSize(this.size);
    });
  },

  checkSize(size) {
    if (size < 3 || size > 20) {
      MissionUtils.Console.print(
        "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."
      );
      this.readBridgeSize();
    }
    return size;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  //readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  //readGameCommand() {},
};

module.exports = InputView;
