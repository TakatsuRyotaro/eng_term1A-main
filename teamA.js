// @ts-check
/// <reference path="./static/lib/@types/global.d.ts" />

class AppController extends AbstractAppController {
  /**
   * 各年に1度呼ばれる初期化処理。
   *
   * @param {number} year 年数。1始まり。
   */
  init(year) {}

  /**
   * 各週に1度呼ばれるアプリの処理。
   *
   * @param {number} year 年数。1始まり。
   * @param {number} week 週数。1始まり。
   * @param {DemandEntity[]} demands 今週の納品依頼情報。
   * @param {Map<string, DemandEntity[]>} prevWeekDeliveries 先週の各社の納品情報。
   */
  execute(year, week, demands, prevWeekDeliveries) {
    this.order([new OrderData('1001', 1, `A${week}`)]);
  }
}

AppController.registerController(AppController, 'サンプル倉庫', 'teamX.svg');
