import type { Adb } from "@yume-chan/adb";

import type { ScrcpyOptionsInit1_22 } from "../../options/index.js";
import type { AdbScrcpyConnection } from "../connection.js";

import { AdbScrcpyOptions1_16 } from "./1_16.js";
import { AdbScrcpyOptionsBase } from "./types.js";

export class AdbScrcpyOptions1_22 extends AdbScrcpyOptionsBase<ScrcpyOptionsInit1_22> {
    public override createConnection(adb: Adb): AdbScrcpyConnection {
        return AdbScrcpyOptions1_16.createConnection(
            adb,
            {
                scid: -1,
                control: this.value.control,
                sendDummyByte: this.value.sendDummyByte,
            },
            this.tunnelForwardOverride || this.value.tunnelForward
        );
    }
}
