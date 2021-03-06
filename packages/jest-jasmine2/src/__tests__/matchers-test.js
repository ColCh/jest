/**
 * Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 */
'use strict';

describe('matchers', () => {
  it('proxies matchers to jest-matchers', () => {
    expect(() => expect(1).toBe(2))
      .toThrowErrorMatchingSnapshot();
  });
});
