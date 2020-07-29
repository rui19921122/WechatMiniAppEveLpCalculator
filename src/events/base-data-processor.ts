import { Events } from "@tarojs/taro";

class BaseDataProcessor {
  // 获取基础信息的进程汇报
  eventEmitter: Events;
  constructor() {
    this.eventEmitter = new Events();
  }
  update(value: string) {
    this.eventEmitter.trigger("process", value);
  }
  onDone(handler: () => void) {
    this.eventEmitter.on("done", handler);
  }
  onUpdate(handler: (args: string) => void) {
    this.eventEmitter.on("process", handler);
  }
  done() {
    this.eventEmitter.off("process");
    this.eventEmitter.trigger("done");
  }
}

const base_data_processor = new BaseDataProcessor();
export default base_data_processor;
