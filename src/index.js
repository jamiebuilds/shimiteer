// @flow
const EventEmitter = require('events');
const { ChildProcess } = require('child_process');

class Shimiteer {
  static async launch() {
    return new Browser();
  }

  static async connect() {
    return new Browser();
  }

  static async defaultArgs() {
    return [];
  }

  static async executablePath() {
    return '';
  }
}

class Browser extends EventEmitter {
  async newPage(): Promise<Page> {
    return new Page();
  }

  async close() {
    // ...
  }

  disconnect() {
    // ...
    this.emit('disconnected');
  }

  wsEndpoint(): string {
    // ...
    return '';
  }

  async pages(): Promise<Array<Page>> {
    return [];
  }

  process(): ChildProcess | null {
    // ...
    return null;
  }

  targets(): Array<Target> {
    return [];
  }

  async userAgent(): Promise<string> {
    return '';
  }

  async version(): Promise<string> {
    return '';
  }
}

class Page extends EventEmitter {
  async goto(url: string) {
    // ...
  }

  async $(selector: string): Promise<ElementHandle | null> {
    // ...
    return null;
  }

  async $$(selector: string): Promise<Array<ElementHandle>> {
    return [];
  }

  async $$eval(
    selector: string,
    pageFunction: Function,
    ...args: Array<Serializable | JSHandle>
  ): Promise<Serializable> {
    // ...
  }

  async $eval(
    selector: string,
    pageFunction: Function,
    ...args: Array<Serializable | JSHandle>
  ): Promise<Serializable> {
    // ...
  }

  async $x(expression: string): Promise<Array<ElementHandle>> {
    // ...
    return [];
  }

  async addScriptTag(options: {
    url: string,
    path: string,
    conect: string
  }): Promise<ElementHandle> {
    // ...
  }

  async authenticate(credentials?: {
    username: string,
    password: string
  }): Promise<void> {
    // ...
  }

  async bringToFront(): Promise<void> {
    // ...
  }

  async click(
    selector: string,
    options: {
      button?: MouseButton,
      clickCount?: number,
      delay?: number
    } = {}
  ) {
    // ...
  }

  async close(): Promise<void> {
    // ...
  }

  async content(): Promise<string> {
    // ...
    return '';
  }

  async cookies(
    ...urls: Array<string>
  ): Promise<
    Array<{
      name: string,
      value: string,
      domain?: string,
      path?: string,
      expires?: number,
      httpOnly?: boolean,
      secure?: boolean,
      session?: boolean,
      sameSite?: SameSite
    }>
  > {
    // ...
    return [];
  }

  get coverage(): Coverage {
    // ...
  }

  async deleteCookie(
    ...cookies: Array<{
      name: string,
      url?: string,
      domain?: string,
      path?: string,
      secure?: boolean
    }>
  ): Promise<void> {
    // ...
  }

  async emulate(options: {
    viewport?: ViewportOptions,
    userAgent?: string
  }): Promise<void> {
    // ...
  }

  async emulateMedia(mediaType: 'screen' | 'print' | null): Promise<void> {
    // ...
  }

  async evaluate(
    pageFunction: Function | string,
    ...args: Array<Serializable | JSHandle>
  ): Promise<Serializable> {
    // ...
  }

  async evaluateHandle(
    pageFunction: Function | string,
    ...args: Array<Serializable | JSHandle>
  ) {
    // ...
  }

  async evaluateOnNewDocument(
    pageFunction: Function | string,
    ...args: Array<Serializable>
  ): Promise<void> {
    // ...
  }

  async exposeFunction(
    name: string,
    puppeteerFunction: Function
  ): Promise<void> {
    // ...
  }

  async focus(selector: string): Promise<void> {
    // ...
  }

  frames(): Array<Frame> {
    // ...
    return [];
  }

  async goBack(options: PageNavigationOptions = {}): Promise<Response | null> {
    // ...
    return null;
  }

  async goForward(
    options: PageNavigationOptions = {}
  ): Promise<Response | null> {
    // ...
    return null;
  }

  async goto(
    url: string,
    options: PageNavigationOptions = {}
  ): Promise<Response | null> {
    // ...
  }

  async hover(selector: string): Promise<void> {
    // ...
  }

  get keyboard(): Keyboard {
    // ...
  }

  mainFrame(): Frame {
    // ...
  }

  async metrics(): Promise<{
    Timestamp: number,
    Documents: number,
    Frames: number,
    JSEventListeners: number,
    Nodes: number,
    LayoutCount: number,
    RecalcStyleCount: number,
    LayoutDurection: number,
    RecalcStyleCount: number,
    LayoutDuration: number,
    RecalcStyleDuration: number,
    ScriptDuration: number,
    TaskDuration: number,
    JSHeapUsedSize: number,
    JSHeapTotalSize: number
  }> {
    // ...
  }

  mouse(): Mouse {
    // ...
  }

  pdf(
    options: {
      path?: string,
      scale?: number,
      displayHeaderFooter?: boolean,
      headerTemplate?: string,
      footerTemplate?: string,
      printBackground?: boolean,
      landscape?: boolean,
      pageRanges?: string,
      format?: PDFFormat,
      width?: string | number,
      height?: string | number,
      margin?: {
        top?: string,
        right?: string,
        bottom?: string,
        left?: string
      }
    } = {}
  ): Promise<Buffer> {
    // ...
  }

  async queryObjects(prototype: JSHandle): Promise<JSHandle> {
    // ...
  }

  async reload(options: PageNavigationOptions = {}): Promise<Response> {
    // ...
  }

  async screenshot(
    options: {
      path?: string,
      type?: string,
      quality?: number,
      fullPage?: boolean,
      clip?: { x: number, y: number, width: number, height: number },
      omitBackground?: boolean
    } = {}
  ): Promise<Buffer> {
    // ...
  }

  async select(
    selector: string,
    ...values: Array<string>
  ): Promise<Array<string>> {
    // ...
  }

  async setContent(html: string): Promise<void> {
    // ...
  }

  async setCookie(
    ...cookies: Array<{
      name: string,
      value: string,
      url?: string,
      domain?: string,
      path?: string,
      expires?: number,
      httpOnly?: boolean,
      secure?: boolean,
      sameSite?: SameSite
    }>
  ): Promise<void> {
    // ...
  }

  setDefaultNavigationTimeout(timeout: number): void {
    // ...
  }

  async setExtraHTTPHeaders(headers: { [key: string]: string }): Promise<void> {
    // ...
  }

  async setJavaScriptEnabled(enabled: boolean): Promise<void> {
    // ...
  }

  async setOfflineMode(enabled: boolean): Promise<void> {
    // ...
  }

  async setRequestInterception(value: boolean): Promise<void> {
    // ...
  }

  async setUserAgent(userAgent: string): Promise<void> {
    // ...
  }

  async setViewport(viewport: ViewportOptions): Promise<void> {
    // ...
  }

  async tap(selector: string): Promise<void> {
    // ...
  }

  target(): Target {
    // ...
  }

  async title(): Promise<string> {
    // ...
  }

  get touchscreen(): Touchscreen {
    // ...
  }

  get tracing(): Tracing | null {
    // ...
  }

  async type(
    selector: string,
    text: string,
    options: { delay?: number } = {}
  ): Promise<void> {
    // ...
  }

  url(): string {
    // ...
  }

  viewport(): Viewport {
    // ...
  }

  // to be continued...
}

type Viewport = {
  width: number,
  height: number,
  deviceScaleFactor: number,
  isMobile: boolean,
  hasTouch: boolean,
  isLandscape: boolean
};

type ViewportOptions = $Shape<Viewport>;

type NavigationEvent =
  | 'load'
  | 'domcontentloaded'
  | 'networkidle0'
  | 'networkidle2';

type PageNavigationOptions = {
  timeout?: number,
  waitUntil?: NavigationEvent | Array<NavigationEvent>
};

type SameSite = 'Strict' | 'Lax';

type PDFFormat =
  | 'Letter'
  | 'Legal'
  | 'Tabloid'
  | 'Ledger'
  | 'A0'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6';

class Target {
  // ..
}

class Keyboard {
  async down(key: string, options: { text?: string } = {}): Promise<void> {
    // ...
  }

  async press(
    key: string,
    options: { text?: string, delay?: number } = {}
  ): Promise<void> {
    // ...
  }

  async sendCharacter(char: string): Promise<void> {
    // ...
  }

  async type(text: string, options: { delay?: number } = {}) {
    // ...
  }

  async up(key: string): Promise<void> {
    // ...
  }
}

class Mouse {
  async click(
    x: number,
    y: number,
    options: {
      button?: MouseButton,
      clickCount?: number,
      delay?: number
    } = {}
  ): Promise<void> {
    // ...
  }

  async down(
    options: {
      button?: MouseButton,
      clickCount?: number
    } = {}
  ): Promise<void> {
    // ...
  }

  async move(
    x: number,
    y: number,
    options: { steps?: number } = {}
  ): Promise<void> {
    // ...
  }

  async up(options: { button?: MouseButton, clickCount?: number } = {}) {
    // ...
  }
}

type MouseButton = 'left' | 'right' | 'middle';

class Touchscreen {
  async tap(x: number, y: number): Promise<void> {
    // ...
  }
}

class Tracing {
  start(options: {
    path: string,
    screenshots?: boolean,
    categories?: Array<string>
  }): Promise<void> {
    // ...
  }

  stop(): Promise<void> {
    // ...
  }
}

class Dialog {
  accept(promptText?: string): Promise<void> {
    // ...
  }

  defaultValue(): string {
    // ...
  }

  dismiss(): Promise<void> {
    // ...
  }

  message(): string {
    // ...
  }

  type(): DialogType {
    // ...
  }
}

type DialogType = 'alert' | 'beforeunload' | 'confirm' | 'prompt';

class ConsoleMessage {
  args(): Array<JSHandle> {
    // ...
  }

  text(): string {
    // ...
  }

  type(): ConsoleMessageType {
    // ...
  }
}

type ConsoleMessageType =
  | 'log'
  | 'debug'
  | 'info'
  | 'error'
  | 'warning'
  | 'dir'
  | 'dirxml'
  | 'table'
  | 'trace'
  | 'clear'
  | 'startGroup'
  | 'startGroupCollapsed'
  | 'endGroup'
  | 'assert'
  | 'profile'
  | 'profileEnd'
  | 'count'
  | 'timeEnd';

module.exports = Shimiteer;
