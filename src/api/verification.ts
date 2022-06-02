import { Signer, BytesLike, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Verification } from '../wrappers/Verification';
import { Verification__factory } from '../wrappers/factories/Verification__factory';

import { TwitterVerifier } from '../wrappers/TwitterVerifier';
import { TwitterVerifier__factory } from '../wrappers/factories/TwitterVerifier__factory';

import { AdminVerifier } from '../wrappers';
import { AdminVerifier__factory } from '../wrappers/factories/AdminVerifier__factory';

import { BigNumberish } from '@ethersproject/bignumber';
import { Options as Overrides, VerifierType } from '../types/Types';

/**
 * @class VerificationAPI
 */
export class VerificationAPI {
  private signer: Signer;
  private verification: Verification;
  private twitterVerifier: TwitterVerifier;
  private adminVerifier: AdminVerifier;
  private personaVerifier: AdminVerifier;

  private config: SublimeConfig;
  /**
   * @param signer Signer
   * @param config SublimeConfig
   */
  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.verification = new Verification__factory(this.signer).attach(config.verificationContractAddress);
    this.twitterVerifier = new TwitterVerifier__factory(this.signer).attach(config.twitterVerifierContractAddress);
    this.adminVerifier = new AdminVerifier__factory(this.signer).attach(config.adminVerifierContractAddress);
    this.personaVerifier = new AdminVerifier__factory(this.signer).attach(config.personaVerifierContractAddress);
    this.config = config;
  }

  /**
   * @param user Address to check
   * @returns
   */
  public async isUser(user: string): Promise<boolean> {
    return this.verification.isUser(user, this.twitterVerifier.address);
  }

  /**
   *
   * @param verifier Address of the verifier contract
   * @returns
   */
  public async isVerifier(verifier: string): Promise<boolean> {
    return this.verification.verifiers(verifier);
  }

  /**
   * @param verifier Address of the verifier contract. Only Admin can call
   * @returns
   */
  public async addVerifier(verifier: string, options?: Overrides): Promise<ContractTransaction> {
    return this.verification.addVerifier(verifier, { ...options });
  }
  /**
   *
   * @param _masterAddress Master Address
   * @param _isMasterLinked True if the master address is linked
   * @returns
   */
  public async registerMasterAddress(_masterAddress: string, _isMasterLinked: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.verification.registerMasterAddress(_masterAddress, _isMasterLinked, { ...options });
  }

  /**
   * @param _isMasterLinked True if the master address is linked
   * @param _v V component of the signature
   * @param _r R component of the signature
   * @param _s S component of the signature
   * @param _twitterId Twitter ID of the user
   * @param _deadline Deadline for the registration
   * @returns
   */
  public registerSelfUsingTwitterVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _twitterId: string,
    _tweetId: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.twitterVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _twitterId, _tweetId, _deadline, { ...options });
  }

  public unregisterSelfUsingTwitterVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.unregisterSelf({ ...options });
  }

  public registerUsingAdminVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _userData: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.adminVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _userData, _deadline, { ...options });
  }

  public registerUsingPersonaVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _userData: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.personaVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _userData, _deadline, { ...options });
  }

  public unregisterSelfUsingPersonaVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.personaVerifier.unregisterSelf({ ...options });
  }

  public unregisterSelfUsingAdminVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.adminVerifier.unregisterSelf({ ...options });
  }

  /**
   *
   * @param _verification Address of the verification contract
   * @returns
   */
  public updateVerification(_verification: string, options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.updateVerification(_verification, { ...options });
  }

  /**
   *
   * @param _signerAddress Address of the signer
   * @returns
   */
  public updateSignerAddress(_signerAddress: string, options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.updateSignerAddress(_signerAddress, { ...options });
  }

  public getVerifierAddress(type: VerifierType): string {
    if (type == VerifierType.AdminVerifier) {
      return this.config.adminVerifierContractAddress;
    } else if (type == VerifierType.TwitterVerifier) {
      return this.config.twitterVerifierContractAddress;
    } else if (type == VerifierType.PersonaVerifier) {
      return this.config.personaVerifierContractAddress;
    } else {
      return undefined;
    }
  }

  public getVerifierType(address: string): VerifierType {
    if (!address) {
      return undefined;
    }
    if (address.toLowerCase() == this.config.adminVerifierContractAddress.toLowerCase()) {
      return VerifierType.AdminVerifier;
    } else if (address.toLowerCase() == this.config.twitterVerifierContractAddress.toLowerCase()) {
      return VerifierType.TwitterVerifier;
    } else if (address.toLowerCase() == this.config.personaVerifierContractAddress.toLowerCase()) {
      return VerifierType.PersonaVerifier;
    } else {
      return undefined;
    }
  }
}
